---
title: 'Month'
group: 'svelteuidev-dates'
packageGroup: '@svelteuidev/dates'
slug: /dates/month/
description: 'Most basic date related component, displays given month with optional weekdays row'
import: "import { Month } from '@svelteuidev/dates';"
docs: 'dates/month.md'
source: 'svelteui-dates/src/components/Month/Month.svelte'
---

<script lang='ts'>
    import { Demo, MonthDemos } from "@svelteuidev/demos";
    import { Heading } from 'components'
</script>

<Heading />

## Usage

Month is the most basic @svelteuidev/dates component, it displays a single month without any controls to change current month. This component is used as base for [Calendar](/calendar)(coming soon), [DatePicker](/date-picker)(coming soon) and other components. You can use Month to build custom date or date range pickers that are not included in @svelteuidev/dates, but in most cases other components will be more suitable in your application.

<Demo demo={MonthDemos.usage} />

## Localization

All @svelteuidev/dates components are built with [dayjs](https://day.js.org/) library.
The default locale is `en`, and to change this, follow the [dayjs localization guide](https://day.js.org/docs/en/i18n/loading-into-nodejs):

```ts
// First import locale data
import 'dayjs/locale/ru';
```

Then set `locale` prop in component:

<Demo demo={MonthDemos.localization} />

## First day of the week

Change first day of week with `firstDayOfWeek` prop. It accepts either `sunday` or `monday` as values:

<Demo demo={MonthDemos.firstDaySunday} />

## Weekend days

You can set days of week that should be treated as weekend with `weekendDays` prop:

<Demo demo={MonthDemos.weekendDays} />

## Range

Highlight date range with `range` prop. Prop accepts an array with two dates, later date must always go last:

<Demo demo={MonthDemos.range} />

## Min and max dates

Set `minDate` and `maxDate` props to define minimum and maximum possible dates.
Dates which are not included in available interval will be disabled:

<Demo demo={MonthDemos.boundaries} />

## Exclude dates

To exclude dates set `excludeDate` prop with function that receives date as an argument and returns
`true` if date should be disabled. For example, to disable weekends check if date day is 0 or 6:

<Demo demo={MonthDemos.exclude} />

## Hide weekdays names

To hide weekdays names row set `hideWeekdays` prop:

<Demo demo={MonthDemos.weekdays} />
