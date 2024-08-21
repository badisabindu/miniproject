"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'fsq-developers/1.0 (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
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
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
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
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Allow a user to create a check-in.
     *
     * @summary Create Check-in
     */
    SDK.prototype.createACheckin = function (metadata) {
        return this.core.fetch('/checkins/add', 'post', metadata);
    };
    /**
     * Get the details of a user's check-in.
     *
     * @summary Get Check-in Details
     */
    SDK.prototype.getCheckinDetails = function (metadata) {
        return this.core.fetch('/checkins/{checkin_id}', 'get', metadata);
    };
    /**
     * Remove a check-in, if the acting user is the owner of the check-in.
     *
     * @summary Delete Check-in
     * @throws FetchError<400, types.DeleteACheckInResponse400> 400
     */
    SDK.prototype.deleteACheckIn = function (metadata) {
        return this.core.fetch('/checkins/{checkin_id}/delete', 'post', metadata);
    };
    /**
     * Allows the acting user to edit their check-ins after the fact.
     *
     * @summary Update Checkin
     * @throws FetchError<400, types.UpdateACheckinResponse400> 400
     */
    SDK.prototype.updateACheckin = function (metadata) {
        return this.core.fetch('/checkins/{checkin_id}/update', 'post', metadata);
    };
    /**
     * Allow a user to create a list.
     *
     * @summary Create List
     * @throws FetchError<400, types.CreateAListResponse400> 400
     */
    SDK.prototype.createAList = function (metadata) {
        return this.core.fetch('/lists/add', 'post', metadata);
    };
    /**
     * Get details of the user's list.
     *
     * @summary Get List Details
     * @throws FetchError<400, types.GetListDetailsResponse400> 400
     */
    SDK.prototype.getListDetails = function (metadata) {
        return this.core.fetch('/lists/{list_id}', 'get', metadata);
    };
    /**
     * Add an item to the list, if the acting user is the author or the owner of the list.
     *
     * @summary Add List Item
     * @throws FetchError<400, types.AddItemToListResponse400> 400
     */
    SDK.prototype.addItemToList = function (metadata) {
        return this.core.fetch('/lists/{list_id}/additem', 'post', metadata);
    };
    /**
     * Delete a list, if the acting user is the owner of the list.
     *
     * @summary Delete List
     * @throws FetchError<400, types.DeleteAListResponse400> 400
     */
    SDK.prototype.deleteAList = function (metadata) {
        return this.core.fetch('/lists/{list_id}/delete', 'post', metadata);
    };
    /**
     * Delete an item to the list, if the acting user is the author or the owner of the list.
     *
     * @summary Delete List Item
     * @throws FetchError<400, types.DeleteItemFromListResponse400> 400
     */
    SDK.prototype.deleteItemFromList = function (metadata) {
        return this.core.fetch('/lists/{list_id}/deleteitem', 'post', metadata);
    };
    /**
     * Retrieve venue suggestions related to current list venues.
     *
     * @summary Suggest List Venues
     * @throws FetchError<400, types.SuggestVenuesForAListResponse400> 400
     */
    SDK.prototype.suggestVenuesForAList = function (metadata) {
        return this.core.fetch('/lists/{list_id}/suggestvenues', 'get', metadata);
    };
    /**
     * Allows the acting user to edit their lists.
     *
     * @summary Update List
     * @throws FetchError<400, types.UpdateAListResponse400> 400
     */
    SDK.prototype.updateAList = function (metadata) {
        return this.core.fetch('/lists/{list_id}/update', 'post', metadata);
    };
    /**
     * Get the details of a photo associated with a venue.
     *
     * @summary Get Photo Details
     * @throws FetchError<400, types.GetPhotoDetailsResponse400> 400
     */
    SDK.prototype.getPhotoDetails = function (metadata) {
        return this.core.fetch('/photos/{photo_id}', 'get', metadata);
    };
    /**
     * Return autocomplete search options based on the user's query.
     *
     * @summary Search for Autocomplete
     * @throws FetchError<400, types.AutocompleteForSearchResponse400> 400
     */
    SDK.prototype.autocompleteForSearch = function (metadata) {
        return this.core.fetch('/search/autocomplete', 'get', metadata);
    };
    /**
     * Return geographic autocomplete search options based on the user's query.
     *
     * @summary Search Geo Autocomplete
     * @throws FetchError<400, types.GeoAutocompleteForSearchResponse400> 400
     */
    SDK.prototype.geoAutocompleteForSearch = function (metadata) {
        return this.core.fetch('/search/geoautocomplete', 'get', metadata);
    };
    /**
     * Get recommended venues based on the user's query and location.
     *
     * @summary Search Venue Recommendations
     * @throws FetchError<400, types.GetVenueRecommendationsResponse400> 400
     */
    SDK.prototype.getVenueRecommendations = function (metadata) {
        return this.core.fetch('/search/recommendations', 'get', metadata);
    };
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
    SDK.prototype.addATaste = function (metadata) {
        return this.core.fetch('/tastes/add', 'post', metadata);
    };
    /**
     * Show autocompleted tastes based on user's taste search query.
     *
     * @summary Autocomplete Tastes
     * @throws FetchError<400, types.AutocompleteTastesResponse400> 400
     */
    SDK.prototype.autocompleteTastes = function (metadata) {
        return this.core.fetch('/tastes/autocomplete', 'get', metadata);
    };
    /**
     * Allow a user to delete a taste from their profile.
     *
     * @summary Delete Taste
     * @throws FetchError<400, types.DeleteATasteResponse400> 400
     */
    SDK.prototype.deleteATaste = function (metadata) {
        return this.core.fetch('/tastes/delete', 'post', metadata);
    };
    /**
     * Show taste suggestions to the user for selection.
     *
     * @summary Get Taste Suggestions
     * @throws FetchError<400, types.GetTasteSuggestionsResponse400> 400
     */
    SDK.prototype.getTasteSuggestions = function (metadata) {
        return this.core.fetch('/tastes/suggestions', 'get', metadata);
    };
    /**
     * Allows a user to vote on a tip.
     *
     * @summary Vote Tip
     */
    SDK.prototype.voteForATip = function (metadata) {
        return this.core.fetch('/tips/{tip_id}/vote', 'post', metadata);
    };
    /**
     * Allow a user to add a tip/review.
     *
     * @summary Add Tip
     * @throws FetchError<400, types.AddATipResponse400> 400
     */
    SDK.prototype.addATip = function (metadata) {
        return this.core.fetch('/tips/add', 'post', metadata);
    };
    /**
     * Get details of the tip/review.
     *
     * @summary Get Tip Details
     * @throws FetchError<400, types.GetTipDetailsResponse400> 400
     */
    SDK.prototype.getTipDetails = function (metadata) {
        return this.core.fetch('/tips/{tip_id}', 'get', metadata);
    };
    /**
     * Delete a tip/review, if the acting user is the owner of the tip/review.
     *
     * @summary Delete Tip
     * @throws FetchError<400, types.DeleteATipResponse400> 400
     */
    SDK.prototype.deleteATip = function (metadata) {
        return this.core.fetch('/tips/{tip_id}/delete', 'post', metadata);
    };
    /**
     * Allows users to indicate a tip/review is probelmatic in some way.
     *
     * @summary Flag Tip
     * @throws FetchError<400, types.IndicateProblematicTipResponse400> 400
     */
    SDK.prototype.indicateProblematicTip = function (metadata) {
        return this.core.fetch('/tips/{tip_id}/flag', 'post', metadata);
    };
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
    SDK.prototype.createAManagedUser = function (metadata) {
        return this.core.fetch('/usermanagement/createuser', 'post', metadata);
    };
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
    SDK.prototype.deleteAManagedUser = function (metadata) {
        return this.core.fetch('/usermanagement/deleteuser', 'post', metadata);
    };
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
    SDK.prototype.requestDataRetrieval = function (metadata) {
        return this.core.fetch('/usermanagement/exportuser', 'post', metadata);
    };
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
    SDK.prototype.checkPrivacyRequestStatus = function (metadata) {
        return this.core.fetch('/usermanagement/privacyrequeststatus', 'get', metadata);
    };
    /**
     * Refresh a Foursquare managed user's oauth token.
     *
     * @summary Refresh Managed User Token
     * @throws FetchError<400, types.RefreshManagedUserTokenResponse400> 400
     */
    SDK.prototype.refreshManagedUserToken = function (metadata) {
        return this.core.fetch('/usermanagement/refreshtoken', 'post', metadata);
    };
    /**
     * Return profile information for the user whose `oauth_token` is provided.
     *
     * @summary Get User Details
     */
    SDK.prototype.getUserDetails = function (metadata) {
        return this.core.fetch('/users/self', 'get', metadata);
    };
    /**
     * A log of activities for the user whose `oauth_token` is provided.
     *
     * @summary Get User Activities
     * @throws FetchError<400, types.GetUserActivitiesResponse400> 400
     */
    SDK.prototype.getUserActivities = function (metadata) {
        return this.core.fetch('/users/self/activities', 'get', metadata);
    };
    /**
     * Get the history of checkins for the user whose `oauth_token` is provided.
     *
     * @summary Get User Checkins
     */
    SDK.prototype.getUserCheckins = function (metadata) {
        return this.core.fetch('/users/self/checkins', 'get', metadata);
    };
    /**
     * Get lists for the user whose `oauth_token` is provided.
     *
     * @summary Get User Lists
     */
    SDK.prototype.getUserLists = function (metadata) {
        return this.core.fetch('/users/self/lists', 'get', metadata);
    };
    /**
     * Get the tastes for the user whose `oauth_token` is provided.
     *
     * @summary Get User Tastes
     * @throws FetchError<400, types.GetUserTastesResponse400> 400
     */
    SDK.prototype.getUserTastes = function (metadata) {
        return this.core.fetch('/users/self/tastes', 'get', metadata);
    };
    /**
     * Get the tips/reviews for the user whose `oauth_token` is provided.
     *
     * @summary Get User Tips
     * @throws FetchError<400, types.GetUserTipsResponse400> 400
     */
    SDK.prototype.getUserTips = function (metadata) {
        return this.core.fetch('/users/self/tips', 'get', metadata);
    };
    /**
     * Get the entire list of
     * [categories](/places/docs/categories#personalization-apis--movement-sdk) that can be
     * applied to a venue.
     *
     * @summary Get Venue Categories
     * @throws FetchError<400, types.GetVenueCategoriesResponse400> 400
     */
    SDK.prototype.getVenueCategories = function (metadata) {
        return this.core.fetch('/venues/categories', 'get', metadata);
    };
    /**
     * Search for venues near a user's location based on a set radius.
     *
     * @summary Search Nearby Venues
     * @throws FetchError<400, types.SearchForNearbyVenuesResponse400> 400
     */
    SDK.prototype.searchForNearbyVenues = function (metadata) {
        return this.core.fetch('/venues/search', 'get', metadata);
    };
    /**
     * Surface places similar to a user's current location based on geographic proximity,
     * consumer behavior trends, and venues offering similar experiences.
     *
     * @summary Get Trending Venues
     * @throws FetchError<400, types.GetTrendingVenuesResponse400> 400
     */
    SDK.prototype.getTrendingVenues = function (metadata) {
        return this.core.fetch('/venues/trending', 'get', metadata);
    };
    /**
     * Get the details - e.g. location and contact information - of the venue specified.
     *
     * @summary Get Venue Details
     * @throws FetchError<400, types.GetVenueDetailsResponse400> 400
     */
    SDK.prototype.getVenueDetails = function (metadata) {
        return this.core.fetch('/venues/{venue_id}/', 'get', metadata);
    };
    /**
     * Get attributes - e.g. price, reservations, payment options - for the specified venue.
     *
     * @summary Get Venue Attributes
     * @throws FetchError<400, types.GetVenueAttributesResponse400> 400
     */
    SDK.prototype.getVenueAttributes = function (metadata) {
        return this.core.fetch('/venues/{venue_id}/attributes', 'get', metadata);
    };
    /**
     * Get the operating hours for the specified venue.
     *
     * @summary Get Venue Hours
     * @throws FetchError<400, types.GetVenueHoursResponse400> 400
     */
    SDK.prototype.getVenueHours = function (metadata) {
        return this.core.fetch('/venues/{venue_id}/hours', 'get', metadata);
    };
    /**
     * Get the photos associated with the specified venue.
     *
     * @summary Get Venue Photos
     * @throws FetchError<400, types.GetVenuePhotosResponse400> 400
     */
    SDK.prototype.getVenuePhotos = function (metadata) {
        return this.core.fetch('/venues/{venue_id}/photos', 'get', metadata);
    };
    /**
     * Allow a user to rate a venue; i.e. dislike/average/like.
     *
     * @summary Rate Venue
     * @throws FetchError<400, types.RateAVenueResponse400> 400
     */
    SDK.prototype.rateAVenue = function (metadata) {
        return this.core.fetch('/venues/{venue_id}/rate', 'post', metadata);
    };
    /**
     * Return a list of venues near the current location with the most people currently checked
     * in.
     *
     * @summary Get Related Venues
     * @throws FetchError<400, types.GetRelatedVenuesResponse400> 400
     */
    SDK.prototype.getRelatedVenues = function (metadata) {
        return this.core.fetch('/venues/{venue_id}/related', 'get', metadata);
    };
    /**
     * Get the tips (i.e. reviews) of the specified venue.
     *
     * @summary Get Venue Tips
     * @throws FetchError<400, types.GetVenueTipsResponse400> 400
     */
    SDK.prototype.getVenueTips = function (metadata) {
        return this.core.fetch('/venues/{venue_id}/tips', 'get', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
