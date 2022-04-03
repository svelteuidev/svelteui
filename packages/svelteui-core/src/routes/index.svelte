<script lang="ts">
	import { Button, Code, Loader, Switch } from '$lib';

	// test for copy button, it should move with scroll
	const text =
		'f;kasdhfidhs ifadspfojdsi f s;fjdsklf dslfjdsk;l f dkf sda;f dskfj dsfjksdl fj dsf;ladsfj ksdf jpsdijfsdjf kladsfdsjfkldsj fksdfkjsdlfk jdsfjk;ldsjf lads;fj ksdfdsf;lk djksf jklsdjflksdnfklsdj lfk;dsklfj;dlsjf klsddnkfljadskl;fjdsaljf;asdjfklasd jsd dsj fksdjf lkdsjl;j lsd ds sdfj sdf;j;asd js';
</script>

<!-- <Button disabled variant="default" /> -->
<!-- <Loader /> -->

<!-- error handling test -->
<Code copy message="hello">{text}</Code>

<!-- <Switch offLabel={'OFF'} onLabel={'ON'} label="I agree to sell my soul" /> -->
