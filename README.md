[Fork on StackBlitz ⚡️](https://stackblitz.com/edit/react-coding-test)

# Currency Rate Table

You are creating an [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) of a currency rate table. It's a React-based web application that displays the currency rates in a sortable table.

# Summary

You have a file in the location `public/api/rates.json` which contains exchange rates based on the EUR. It looks like this:

```
{
    "success": true,
    "timestamp": 1530089887,
    "base": "EUR",
    "date": "2018-06-27",
    "rates": {
        "AED": 4.271175,
        "AFN": 84.428054,
        "EGP": 20.790119,
        "ZWL": 374.873376
        ...
    }
}
```

The table by default should be sorted by the first column ascending (currency name) and you can only sort by one column at a time.

# Tasks

1. Use the fetch API to request 'api/rates.json' and render it inside a table. Please use ordinary HTML elements for this.

2. Clicking on a header column should sort the table by that column.

3. Clicking on a header column that is already sorted should invert the sort direction.

4. Improve the application and add styling where necessary so that:

- The columns and headers are aligned with each other.

- Description is added above to the table stating what the table represents (Exchanges rates of other currencies compared to EUR).

- Alternate the colours of the rows to make reading easier.

- Refactor if necessary around the single responsibility principle.
