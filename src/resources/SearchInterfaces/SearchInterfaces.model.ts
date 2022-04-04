import {SortingBy, SortingOrder} from '../Enums';

export interface IAccesses {
    /**
     * The list of users that are allowed to access the search interface.
     */
    users: string[];

    /**
     * The list of domains that are allowed to access the search interface.
     */
    domains: string[];

    /**
     * When set to true, all users can share and see the search page.
     */
    sharingLinkEnabled?: boolean;

    /**
     * When set to true, the domain sharing is enabled. Otherwise, only users that have explicitly access to the search page can access it.
     */
    sharingDomainEnabled?: boolean;
}

export interface IFacet {
    /**
     * The [field](https://docs.coveo.com/en/200) on which the facet is based.
     */
    field: string;

    /**
     * The label of the facet.
     */
    label: string;
}

export interface ISortCriteria {
    /**
     * Indicates the kind of sort criterion.
     */
    by: SortingBy;

    /**
     * Label of the sort criterion.
     */
    label: string;

    /**
     * Specify the sort order if applicable.
     * Default value when sorting by date is descending.
     * Default value when sorting by field is ascending.
     * No sort order value is applicable when sorting by relevancy.
     */
    order?: SortingOrder;

    /**
     * The [field](https://docs.coveo.com/en/200) on which the sort is based on. For example: filetype.
     * Required when sorting by field.
     * This property is ignored unless you are sorting by field.
     */
    field?: string;
}

export interface ISearchInterfaceConfiguration {
    /**
     * The configuration identifier.
     */
    id: string;

    /**
     * The name of the search interface configuration.
     */
    name: string;

    /**
     * The title of the search interface configuration. Will be displayed as the HTML page title.
     */
    title: string;

    /**
     * The List of facets to display in the search interface.
     */
    facets: IFacet[];

    /**
     * The list of sorts to display in the search interface.
     */
    sortCriteria: ISortCriteria[];

    /**
     * The public access configuration.
     */
    accesses: IAccesses;
}

export interface ISearchInterfaceConfigurationResponse extends ISearchInterfaceConfiguration {
    /**
     * The creation timestamp. (ISO 8601)
     */
    created: string;

    /**
     * The creator principal.
     */
    createdBy: string;

    /**
     * The last update timestamp. (ISO 8601)
     */
    updated: string;

    /**
     * The last updated principal.
     */
    updatedBy: string;
}

export interface IListSearchInterfacesParameters {
    /**
     * A substring that must appear in a search interface configuration name for this configuration to appear in results.
     */
    filter?: string;

    /**
     * The sort direction of the results.<br />Possible values:<br /> - `asc`: ascending order<br /> - `desc`: descending order.
     */
    order?: 'desc' | 'asc';

    /**
     * The 0-based number of the page of configurations to list.
     */
    page?: number;

    /**
     * The maximum number of configurations to include per page.
     */
    perPage?: number;
}

export interface IManifestParameters {
    /**
     * Replace pieces of markup with various placeholders.
     */
    pagePlaceholders?: IPagePlaceholders;
}

export interface IPagePlaceholders {
    /**
     * Placeholder for the result list and result templates.
     */
    results?: string;
}

export interface IManifestResponse {
    /**
     * The html markup of the search interface along with configured placeholders.
     */
    markup: string;
    /**
     * Atomic results configuration information.
     */
    results: IPageManifestResults;
    /**
     * Atomic related styling in CSS format.
     */
    style: IPageManifestStyle;
    /**
     * The complete search interface configuration.
     */
    config: ISearchInterfaceConfigurationResponse;
}

export interface IPageManifestResultTemplate {
    /**
     * The html markup of the content of the result template
     */
    markup: string;
    /**
     * Atomic [result template component](https://docs.coveo.com/en/atomic/latest/reference/components/atomic-result-template/)'s properties.
     */
    attributes: Record<string, string>;
}

export interface IPageManifestResults {
    /**
     * Placeholder for the result list and result templates.
     */
    placeholder?: string;
    /**
     * Atomic [result list component](https://docs.coveo.com/en/atomic/latest/reference/components/atomic-result-list/#properties)'s properties.
     */
    attributes: Record<string, string>;
    /**
     * The list of associated result templates.
     */
    templates: IPageManifestResultTemplate[];
}

export interface IPageManifestStyle {
    /**
     * CSS with various [Atomic theme variables](https://docs.coveo.com/en/atomic/latest/usage/themes-and-visual-customization/#theme-variables).
     */
    theme: string;
    /**
     * CSS for the page's layout.
     */
    layout: string;
}
