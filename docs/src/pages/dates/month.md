---
title: 'Month'
group: 'svelteuidev-dates'
packageGroup: '@svelteuidev/dates'
slug: /dates/month/
description: 'Most basic date related component, displays given month with optional weekdays row'
import: "import { Month } from '@svelteuidev/dates';"
docs: 'dates/month.md'
source: 'svelteui-dates/src/lib/components/Month/Month.svelte'
---

<script lang='ts'>
    import { Demo, MonthDemos } from "@svelteuidev/demos";
    import { Heading } from 'components'
</script>

<Heading />

## Usage

Month is the most basic @svelteuidev/dates component, it displays a single month without any controls to change current month. This component is used as base for [Calendar](/calendar)(coming soon), [DatePicker](/date-picker)(coming soon) and other components. You can use Month to build custom date or date range pickers that are not included in @svelteuidev/dates, but in most cases other components will be more suitable in your application.

<Demo demo={MonthDemos.usage} />
