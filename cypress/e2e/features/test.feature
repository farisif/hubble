Feature: Hubble Tech Test
    Background:
        Given user already visited Tokopedia website

    Scenario: Search iPhone Pro 14 on Tokopedia
        When user searches "iphone pro 14" on searchbar
        And user sets 100000 as minimum price filter
        And user sets 3000000 as maximum price filter
        And user sorts search result by "Harga Terendah"