import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * Allow a user to create a check-in.
     *
     * @summary Create Check-in
     */
    createACheckin(metadata: types.CreateACheckinMetadataParam): Promise<FetchResponse<200, types.CreateACheckinResponse200>>;
    /**
     * Get the details of a user's check-in.
     *
     * @summary Get Check-in Details
     */
    getCheckinDetails(metadata: types.GetCheckinDetailsMetadataParam): Promise<FetchResponse<200, types.GetCheckinDetailsResponse200>>;
    /**
     * Remove a check-in, if the acting user is the owner of the check-in.
     *
     * @summary Delete Check-in
     * @throws FetchError<400, types.DeleteACheckInResponse400> 400
     */
    deleteACheckIn(metadata: types.DeleteACheckInMetadataParam): Promise<FetchResponse<200, types.DeleteACheckInResponse200>>;
    /**
     * Allows the acting user to edit their check-ins after the fact.
     *
     * @summary Update Checkin
     * @throws FetchError<400, types.UpdateACheckinResponse400> 400
     */
    updateACheckin(metadata: types.UpdateACheckinMetadataParam): Promise<FetchResponse<200, types.UpdateACheckinResponse200>>;
    /**
     * Allow a user to create a list.
     *
     * @summary Create List
     * @throws FetchError<400, types.CreateAListResponse400> 400
     */
    createAList(metadata: types.CreateAListMetadataParam): Promise<FetchResponse<200, types.CreateAListResponse200>>;
    /**
     * Get details of the user's list.
     *
     * @summary Get List Details
     * @throws FetchError<400, types.GetListDetailsResponse400> 400
     */
    getListDetails(metadata: types.GetListDetailsMetadataParam): Promise<FetchResponse<200, types.GetListDetailsResponse200>>;
    /**
     * Add an item to the list, if the acting user is the author or the owner of the list.
     *
     * @summary Add List Item
     * @throws FetchError<400, types.AddItemToListResponse400> 400
     */
    addItemToList(metadata: types.AddItemToListMetadataParam): Promise<FetchResponse<200, types.AddItemToListResponse200>>;
    /**
     * Delete a list, if the acting user is the owner of the list.
     *
     * @summary Delete List
     * @throws FetchError<400, types.DeleteAListResponse400> 400
     */
    deleteAList(metadata: types.DeleteAListMetadataParam): Promise<FetchResponse<200, types.DeleteAListResponse200>>;
    /**
     * Delete an item to the list, if the acting user is the author or the owner of the list.
     *
     * @summary Delete List Item
     * @throws FetchError<400, types.DeleteItemFromListResponse400> 400
     */
    deleteItemFromList(metadata: types.DeleteItemFromListMetadataParam): Promise<FetchResponse<200, types.DeleteItemFromListResponse200>>;
    /**
     * Retrieve venue suggestions related to current list venues.
     *
     * @summary Suggest List Venues
     * @throws FetchError<400, types.SuggestVenuesForAListResponse400> 400
     */
    suggestVenuesForAList(metadata: types.SuggestVenuesForAListMetadataParam): Promise<FetchResponse<200, types.SuggestVenuesForAListResponse200>>;
    /**
     * Allows the acting user to edit their lists.
     *
     * @summary Update List
     * @throws FetchError<400, types.UpdateAListResponse400> 400
     */
    updateAList(metadata: types.UpdateAListMetadataParam): Promise<FetchResponse<200, types.UpdateAListResponse200>>;
    /**
     * Get the details of a photo associated with a venue.
     *
     * @summary Get Photo Details
     * @throws FetchError<400, types.GetPhotoDetailsResponse400> 400
     */
    getPhotoDetails(metadata: types.GetPhotoDetailsMetadataParam): Promise<FetchResponse<200, types.GetPhotoDetailsResponse200>>;
    /**
     * Return autocomplete search options based on the user's query.
     *
     * @summary Search for Autocomplete
     * @throws FetchError<400, types.AutocompleteForSearchResponse400> 400
     */
    autocompleteForSearch(metadata: types.AutocompleteForSearchMetadataParam): Promise<FetchResponse<200, types.AutocompleteForSearchResponse200>>;
    /**
     * Return geographic autocomplete search options based on the user's query.
     *
     * @summary Search Geo Autocomplete
     * @throws FetchError<400, types.GeoAutocompleteForSearchResponse400> 400
     */
    geoAutocompleteForSearch(metadata: types.GeoAutocompleteForSearchMetadataParam): Promise<FetchResponse<200, types.GeoAutocompleteForSearchResponse200>>;
    /**
     * Get recommended venues based on the user's query and location.
     *
     * @summary Search Venue Recommendations
     * @throws FetchError<400, types.GetVenueRecommendationsResponse400> 400
     */
    getVenueRecommendations(metadata: types.GetVenueRecommendationsMetadataParam): Promise<FetchResponse<200, types.GetVenueRecommendationsResponse200>>;
    /**
     * This endpoint should be used in conjunction with either of the following endpoints:
     * - [Autocomplete Tastes](autocomplete-tastes)
     * - [Get Taste Suggestions](get-taste-suggestions)
     *
     * Once a `taste_id` has been returned, use the ID in the call to add it to the user's
     * profile.
     *
     * @summary Add Taste
     * @throws FetchError<400, types.AddATasteResponse400> 400
     */
    addATaste(metadata: types.AddATasteMetadataParam): Promise<FetchResponse<200, types.AddATasteResponse200>>;
    /**
     * Show autocompleted tastes based on user's taste search query.
     *
     * @summary Autocomplete Tastes
     * @throws FetchError<400, types.AutocompleteTastesResponse400> 400
     */
    autocompleteTastes(metadata: types.AutocompleteTastesMetadataParam): Promise<FetchResponse<200, types.AutocompleteTastesResponse200>>;
    /**
     * Allow a user to delete a taste from their profile.
     *
     * @summary Delete Taste
     * @throws FetchError<400, types.DeleteATasteResponse400> 400
     */
    deleteATaste(metadata: types.DeleteATasteMetadataParam): Promise<FetchResponse<200, types.DeleteATasteResponse200>>;
    /**
     * Show taste suggestions to the user for selection.
     *
     * @summary Get Taste Suggestions
     * @throws FetchError<400, types.GetTasteSuggestionsResponse400> 400
     */
    getTasteSuggestions(metadata: types.GetTasteSuggestionsMetadataParam): Promise<FetchResponse<200, types.GetTasteSuggestionsResponse200>>;
    /**
     * Allows a user to vote on a tip.
     *
     * @summary Vote Tip
     */
    voteForATip(metadata: types.VoteForATipMetadataParam): Promise<FetchResponse<200, types.VoteForATipResponse200>>;
    /**
     * Allow a user to add a tip/review.
     *
     * @summary Add Tip
     * @throws FetchError<400, types.AddATipResponse400> 400
     */
    addATip(metadata: types.AddATipMetadataParam): Promise<FetchResponse<200, types.AddATipResponse200>>;
    /**
     * Get details of the tip/review.
     *
     * @summary Get Tip Details
     * @throws FetchError<400, types.GetTipDetailsResponse400> 400
     */
    getTipDetails(metadata: types.GetTipDetailsMetadataParam): Promise<FetchResponse<200, types.GetTipDetailsResponse200>>;
    /**
     * Delete a tip/review, if the acting user is the owner of the tip/review.
     *
     * @summary Delete Tip
     * @throws FetchError<400, types.DeleteATipResponse400> 400
     */
    deleteATip(metadata: types.DeleteATipMetadataParam): Promise<FetchResponse<200, types.DeleteATipResponse200>>;
    /**
     * Allows users to indicate a tip/review is probelmatic in some way.
     *
     * @summary Flag Tip
     * @throws FetchError<400, types.IndicateProblematicTipResponse400> 400
     */
    indicateProblematicTip(metadata: types.IndicateProblematicTipMetadataParam): Promise<FetchResponse<200, types.IndicateProblematicTipResponse200>>;
    /**
     *  Create a managed Foursquare user for your application.  This endpoint should be called
     * any time your application registers a new user.
     *
     * **NOTE**: This endpoint requires a **Foursquare Service API Key** to authenticate. Learn
     * how to create a [Service API Key](personalization-apis-authentication).
     *
     * @summary Create Managed User
     * @throws FetchError<400, types.CreateAManagedUserResponse400> 400
     */
    createAManagedUser(metadata: types.CreateAManagedUserMetadataParam): Promise<FetchResponse<200, types.CreateAManagedUserResponse200>>;
    /**
     * Delete a manager user's record from the Foursquare database in response to an end user's
     * request to delete their personal data.
     *
     * Once you've called the Delete Managed User endpoint, please use the [Check Privacy
     * Request Status
     * Endpoint](https://location.foursquare.com/developer/reference/check-privacy-request-status)
     * to find the status (pending/completed/expired) of your managed user deletion request.
     *
     * If you are looking to delete a Movement SDK user rather than a managed user for your
     * application, please use the [SDK Request User Deletion
     * Endpoint](https://location.foursquare.com/developer/reference/delete-a-managed-user)
     * instead.
     *
     * @summary Delete Managed User
     * @throws FetchError<400, types.DeleteAManagedUserResponse400> 400
     */
    deleteAManagedUser(metadata: types.DeleteAManagedUserMetadataParam): Promise<FetchResponse<200, types.DeleteAManagedUserResponse200>>;
    /**
     * Request all of the data stored in Foursquare's database associated with a managed user
     * in response to an end user's request to access their personal data.
     *
     * Once you've called the Delete Managed User endpoint, please use the [Check Privacy
     * Request Status
     * Endpoint](https://location.foursquare.com/developer/reference/check-privacy-request-status)
     * to find the status (pending/completed/expired) of your managed user deletion request.
     *
     * **NOTE**: This endpoint requires a Foursquare Service API Key to authenticate. [Learn
     * how to create a Service API Key](request-data-retrieval).
     *
     * @summary Request Managed User Data
     * @throws FetchError<400, types.RequestDataRetrievalResponse400> 400
     */
    requestDataRetrieval(metadata: types.RequestDataRetrievalMetadataParam): Promise<FetchResponse<200, types.RequestDataRetrievalResponse200>>;
    /**
     * Check the status of either a [Managed User
     * Delete](https://location.foursquare.com/developer/reference/delete-a-managed-user)
     * request or a [Managed User Data
     * Retrieval](https://location.foursquare.com/developer/reference/request-data-retrieval)
     * request.
     *
     * This endpoint returns the following possible values based on the status of your request;
     * pending, completed, and expired.
     *
     * - **Pending** - Your request has been received and is currently pending.
     * - **Completed** - Your request has been completed.  If you requested the retrieval of a
     * managed user's data, a link to the file in s3 is included. The file link is valid up to
     * 7 days after its generation.
     * - **Expired** - Your request has been completed, but the corresponding s3 file
     * containing the managed user's data expired post 7-day availability ; for the Managed
     * User Data Retrieval endpoint only.
     *
     * **NOTE**: This endpoint requires a Foursquare Service API Key to authenticate. [Learn
     * how to create a Service API Key](check-privacy-request-status).
     * > 📄
     * >
     * > Foursquare will respond to requests within 30-days of receipt or otherwise in
     * accordance with law.
     *
     * @summary Check User Data Request Status
     */
    checkPrivacyRequestStatus(metadata: types.CheckPrivacyRequestStatusMetadataParam): Promise<FetchResponse<200, types.CheckPrivacyRequestStatusResponse200>>;
    /**
     * Refresh a Foursquare managed user's oauth token.
     *
     * @summary Refresh Managed User Token
     * @throws FetchError<400, types.RefreshManagedUserTokenResponse400> 400
     */
    refreshManagedUserToken(metadata: types.RefreshManagedUserTokenMetadataParam): Promise<FetchResponse<200, types.RefreshManagedUserTokenResponse200>>;
    /**
     * Return profile information for the user whose `oauth_token` is provided.
     *
     * @summary Get User Details
     */
    getUserDetails(metadata: types.GetUserDetailsMetadataParam): Promise<FetchResponse<200, types.GetUserDetailsResponse200>>;
    /**
     * A log of activities for the user whose `oauth_token` is provided.
     *
     * @summary Get User Activities
     * @throws FetchError<400, types.GetUserActivitiesResponse400> 400
     */
    getUserActivities(metadata: types.GetUserActivitiesMetadataParam): Promise<FetchResponse<200, types.GetUserActivitiesResponse200>>;
    /**
     * Get the history of checkins for the user whose `oauth_token` is provided.
     *
     * @summary Get User Checkins
     */
    getUserCheckins(metadata: types.GetUserCheckinsMetadataParam): Promise<FetchResponse<200, types.GetUserCheckinsResponse200>>;
    /**
     * Get lists for the user whose `oauth_token` is provided.
     *
     * @summary Get User Lists
     */
    getUserLists(metadata: types.GetUserListsMetadataParam): Promise<FetchResponse<200, types.GetUserListsResponse200>>;
    /**
     * Get the tastes for the user whose `oauth_token` is provided.
     *
     * @summary Get User Tastes
     * @throws FetchError<400, types.GetUserTastesResponse400> 400
     */
    getUserTastes(metadata: types.GetUserTastesMetadataParam): Promise<FetchResponse<200, types.GetUserTastesResponse200>>;
    /**
     * Get the tips/reviews for the user whose `oauth_token` is provided.
     *
     * @summary Get User Tips
     * @throws FetchError<400, types.GetUserTipsResponse400> 400
     */
    getUserTips(metadata: types.GetUserTipsMetadataParam): Promise<FetchResponse<200, types.GetUserTipsResponse200>>;
    /**
     * Get the entire list of
     * [categories](/places/docs/categories#personalization-apis--movement-sdk) that can be
     * applied to a venue.
     *
     * @summary Get Venue Categories
     * @throws FetchError<400, types.GetVenueCategoriesResponse400> 400
     */
    getVenueCategories(metadata: types.GetVenueCategoriesMetadataParam): Promise<FetchResponse<200, types.GetVenueCategoriesResponse200>>;
    /**
     * Search for venues near a user's location based on a set radius.
     *
     * @summary Search Nearby Venues
     * @throws FetchError<400, types.SearchForNearbyVenuesResponse400> 400
     */
    searchForNearbyVenues(metadata: types.SearchForNearbyVenuesMetadataParam): Promise<FetchResponse<200, types.SearchForNearbyVenuesResponse200>>;
    /**
     * Surface places similar to a user's current location based on geographic proximity,
     * consumer behavior trends, and venues offering similar experiences.
     *
     * @summary Get Trending Venues
     * @throws FetchError<400, types.GetTrendingVenuesResponse400> 400
     */
    getTrendingVenues(metadata: types.GetTrendingVenuesMetadataParam): Promise<FetchResponse<200, types.GetTrendingVenuesResponse200>>;
    /**
     * Get the details - e.g. location and contact information - of the venue specified.
     *
     * @summary Get Venue Details
     * @throws FetchError<400, types.GetVenueDetailsResponse400> 400
     */
    getVenueDetails(metadata: types.GetVenueDetailsMetadataParam): Promise<FetchResponse<200, types.GetVenueDetailsResponse200>>;
    /**
     * Get attributes - e.g. price, reservations, payment options - for the specified venue.
     *
     * @summary Get Venue Attributes
     * @throws FetchError<400, types.GetVenueAttributesResponse400> 400
     */
    getVenueAttributes(metadata: types.GetVenueAttributesMetadataParam): Promise<FetchResponse<200, types.GetVenueAttributesResponse200>>;
    /**
     * Get the operating hours for the specified venue.
     *
     * @summary Get Venue Hours
     * @throws FetchError<400, types.GetVenueHoursResponse400> 400
     */
    getVenueHours(metadata: types.GetVenueHoursMetadataParam): Promise<FetchResponse<200, types.GetVenueHoursResponse200>>;
    /**
     * Get the photos associated with the specified venue.
     *
     * @summary Get Venue Photos
     * @throws FetchError<400, types.GetVenuePhotosResponse400> 400
     */
    getVenuePhotos(metadata: types.GetVenuePhotosMetadataParam): Promise<FetchResponse<200, types.GetVenuePhotosResponse200>>;
    /**
     * Allow a user to rate a venue; i.e. dislike/average/like.
     *
     * @summary Rate Venue
     * @throws FetchError<400, types.RateAVenueResponse400> 400
     */
    rateAVenue(metadata: types.RateAVenueMetadataParam): Promise<FetchResponse<200, types.RateAVenueResponse200>>;
    /**
     * Return a list of venues near the current location with the most people currently checked
     * in.
     *
     * @summary Get Related Venues
     * @throws FetchError<400, types.GetRelatedVenuesResponse400> 400
     */
    getRelatedVenues(metadata: types.GetRelatedVenuesMetadataParam): Promise<FetchResponse<200, types.GetRelatedVenuesResponse200>>;
    /**
     * Get the tips (i.e. reviews) of the specified venue.
     *
     * @summary Get Venue Tips
     * @throws FetchError<400, types.GetVenueTipsResponse400> 400
     */
    getVenueTips(metadata: types.GetVenueTipsMetadataParam): Promise<FetchResponse<200, types.GetVenueTipsResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
