Feature: Login at SauceDemo

Scenario Outline: User log in at SauceDemo using <username> as username
    When user login using <username> with <password>

    Examples:
        | username          | password      |
        | "standard_user"     | "secret_sauce"  |
        #| "locked_out_user"   | "secret_sauce"  |

Scenario: User failed to login at SauceDemo
    When user login using incorrect credentials