import ReadServiceResource from '../ReadServiceResource';
import {
    FilterParams,
    UsersFiltersModel,
    ListUsersFiltersParams,
    ListUsersReportsParams,
    UsersReportsModel,
    UserModel,
    UsersStatusModel,
} from './UsersInterfaces';

export default class Users extends ReadServiceResource {
    static baseUrl = '/rest/ua/v15/users';

    /**
     * Get the data level filters that apply to a user.
     *
     * @param userId The unique identifier of a user.
     */
    listUserFilters(userId: string, params?: ListUsersFiltersParams) {
        return this.api.get<UsersFiltersModel>(this.buildPathWithOrg(`${Users.baseUrl}/${userId}/filters`, params));
    }

    /**
     * Set the filters that will be applied to a user query.
     *
     * @param userId The unique identifier of a user.
     */
    updateUserFilters(userId: string, filters: FilterParams[]) {
        return this.api.put<void>(this.buildPathWithOrg(`${Users.baseUrl}/${userId}/filters`), filters);
    }

    /**
     * Get the reports that a user can access.
     *
     * @param userId The unique identifier of a user.
     */
    listUsersReports(userId: string, params?: ListUsersReportsParams) {
        return this.api.get<UsersReportsModel>(this.buildPathWithOrg(`${Users.baseUrl}/${userId}/reports`, params));
    }

    /**
     * Set which reports a user can access.
     *
     * @param userId The unique identifier of a user.
     */
    updateUsersReports(userId: string, reportsIDs: string[]) {
        return this.api.put<void>(this.buildPathWithOrg(`${Users.baseUrl}/${userId}/reports`), reportsIDs);
    }

    /**
     * Health check for the users service.
     */
    getUsersServiceHealth() {
        return this.api.get<UsersStatusModel>(`${Users.baseUrl}/monitoring/health`);
    }

    /**
     * Get the users service status.
     */
    getUsersServiceStatus() {
        return this.api.get<UsersStatusModel>(`${Users.baseUrl}/status`);
    }

    /**
     * Get a user.
     *
     * @param userId The unique identifier of a user.
     */
    getUser(userId: string) {
        return this.api.get<UserModel>(this.buildPathWithOrg(`${Users.baseUrl}/${userId}`));
    }
}
