---
title: SvelteUI Dates
group: 'svelteuidev-dates'
packageGroup: '@svelteuidev/dates'
slug: /dates/getting-started/
description: 'Capture date inputs from the user and display calendars'
source: 'svelteui-dates/src/lib'
---

<script>
    import { Alert, Space } from "@svelteuidev/core";
	import { ExclamationTriangle } from 'radix-icons-svelte';
    import { Demo, MonthDemos } from "@svelteuidev/demos";
    import { Heading, CodeBlock } from 'components';
</script>

<Heading />

<Alert icon={ExclamationTriangle} title="WARNING" color="red" variant='filled'>
    Docs styling and Date component styles are conflicting due to a bug. The normal styles will look better
</Alert>

## Installation

Package depends on:

- [svelte](https://www.npmjs.com/package/svelte)
- [dayjs](https://www.npmjs.com/package/dayjs)
- [@svelteuidev/core](https://www.npmjs.com/package/@svelteuidev/core)
- [@svelteuidev/composables](https://www.npmjs.com/package/@svelteuidev/composables)

Install with npm:

<CodeBlock copy>
    npm install dayjs @svelteuidev/core @svelteuidev/composables @svelteuidev/dates
</CodeBlock>

Install with yarn:

<CodeBlock copy>
    yarn add dayjs @svelteuidev/core @svelteuidev/composables @svelteuidev/dates
</CodeBlock>

## Localization

SvelteUI dates uses the [dayjs](https://day.js.org/) library for localization. Follow this [example](https://day.js.org/docs/en/i18n/loading-into-nodejs) to load required locales in your application:

```svelte
<script>
	import 'dayjs/locale/de';
</script>

// Import German language
```

You then can override the locale on a per component basis:

```svelte
<script>
    import { Calendar, Month } from '@svelteuidev/dates';
<script>

<Calendar locale="de" />
<Month locale="de" />
```

## Components

[Calendar](/dates/calendar/) **[coming soon]**

[Month](/dates/month/)

<Demo demo={MonthDemos.usage} toggle />

## Utility functions

Apart from components @svelteuidev/dates package also exports several utility functions.

**get-month-days**

Returns an array of weeks of current month:

```svelte
<script>
import { getMonthDays } from '@svelteuidev/dates';

getMonthDays(new Date()); // -> [[7xDate objects] x amount of weeks in current month]
</script>
```

**get-months-names**

Returns months names for given locale and format:

```svelte
<script>
import { getMonthsNames } from '@svelteuidev/dates';

getMonthsNames('en', 'MMMM');
// -> [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// to localize import locale from dayjs package
import 'dayjs/locale/ru';
import { getMonthsNames } from '@svelteuidev/dates';

getMonthsNames('ru', 'MMMM');
// -> ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь']
</script>
```

**get-weekdays-names**

Returns an array of short weekdays names for given locale:

```svelte
<script>
import { getWeekdaysNames } from '@svelteuidev/dates';

getWeekdaysNames('en');
// -> ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
</script>
```

**get-years-range**

Returns an array of years, which fall into given range:

```svelte
<script>
import { getYearsRange } from '@svelteuidev/dates';

getYearsRange({ from: 2020, to: 2025 });
// -> [2020, 2021, 2022, 2023, 2024, 2025]
</script>
```

**is-same-date**

Returns true if two dates have the same year, month and date, other properties (minutes, seconds, etc.) are ignored:

```svelte
<script>
import { isSameDate } from '@svelteuidev/dates';

isSameDate(new Date(2020, 7, 21), new Date(2020, 7, 21)); // -> true
isSameDate(new Date(2020, 7, 21), new Date(2020, 7, 22)); // -> false
</script>
```

**is-same-month**

Returns true if two dates have the same year and month, other properties (date, minutes, seconds, etc.) are ignored:

```svelte
<script>
import { isSameMonth } from '@svelteuidev/dates';

isSameMonth(new Date(2020, 7, 21), new Date(2020, 7, 22)); // -> true
isSameMonth(new Date(2020, 7, 21), new Date(2020, 8, 22)); // -> false
</script>
```
