Feature: Hubble Tech Test
    Background:
        Given user already visited Tokopedia website

    Scenario Outline: Search <keyword> on Tokopedia
        When user searches <keyword> on searchbar
        And user sets <minPrice> as minimum price filter
        And user sets <maxPrice> as maximum price filter
        And user selects <storeType> as store type filter
        And user sorts search result by <sortType>
        Then user should be able to ensure all product name on search result page has keyword <keyword>

        When user redirects to the next search result page
        Then user should be able to ensure all product name on search result page has keyword <keyword>
        
        When user redirects to the next search result page
        Then user should be able to ensure all product name on search result page has keyword <keyword>

        Examples:
            | keyword           | minPrice  | maxPrice  | storeType         | sortType          |
            | "iphone pro 14"   | 100000    | 30000000  | "Official Store"  | "Harga Terendah"  |