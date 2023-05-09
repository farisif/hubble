Feature: Hubble Tech Test
    Background:
        Given user already visited Tokopedia website

    Scenario: Search iPhone Pro 14 on Tokopedia
        When user search "iphone pro 14" on searchbar
        And user set 100000 as minimum price filter
        And user set 3000000 as maximum price filter