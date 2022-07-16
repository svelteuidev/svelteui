<script context="module">
	function isTouchEvent(e) {
		return e.constructor.name === 'TouchEvent';
	}
	function transform(el, value) {
		el.style['transform'] = value;
		el.style['webkitTransform'] = value;
	}
	function opacity(el, value) {
		el.style['opacity'] = value.toString();
	}
	const calculate = (e, el) => {
		const offset = el.getBoundingClientRect();
		const target = isTouchEvent(e) ? e.touches[e.touches.length - 1] : e;
		const localX = target.clientX - offset.left;
		const localY = target.clientY - offset.top;
		let radius = 0;
		let scale = 0.3;
		// Get ripple position
		const center = el.dataset.center;
		const circle = el.dataset.circle;
		if (circle) {
			scale = 0.15;
			radius = el.clientWidth / 2;
			radius = center
				? radius
				: radius + Math.sqrt((localX - radius) ** 2 + (localY - radius) ** 2) / 4;
		} else {
			radius = Math.sqrt(el.clientWidth ** 2 + el.clientHeight ** 2) / 2;
		}
		const centerX = `${(el.clientWidth - radius * 2) / 2}px`;
		const centerY = `${(el.clientHeight - radius * 2) / 2}px`;
		const x = center ? centerX : `${localX - radius}px`;
		const y = center ? centerY : `${localY - radius}px`;
		return { radius, scale, x, y, centerX, centerY };
	};
	const startRipple = function (eventType, event) {
		const hideEvents = ['touchcancel', 'mouseleave', 'dragstart'];
		let container = event.currentTarget || event.target;
		if (container && !container.classList.contains('ripple')) {
			container = container.querySelector('.ripple');
		}
		if (!container) {
			return;
		}
		const prev = container.dataset.event;
		if (prev && prev !== eventType) {
			return;
		}
		container.dataset.event = eventType;
		// Create the ripple
		const wave = document.createElement('span');
		const { radius, scale, x, y, centerX, centerY } = calculate(event, container);
		const color = container.dataset.color;
		const size = `${radius * 2}px`;
		wave.className = 'animation';
		wave.style.width = size;
		wave.style.height = size;
		wave.style.background = color;
		wave.classList.add('animation-enter');
		wave.classList.add('animation--visible');
		transform(wave, `translate(${x}, ${y}) scale3d(${scale},${scale},${scale})`);
		opacity(wave, 0);
		wave.dataset.activated = String(performance.now());
		container.appendChild(wave);
		setTimeout(() => {
			wave.classList.remove('animation-enter');
			wave.classList.add('animation-in');
			transform(wave, `translate(${centerX}, ${centerY}) scale3d(1,1,1)`);
			opacity(wave, 0.25);
		}, 0);
		const releaseEvent = eventType === 'mousedown' ? 'mouseup' : 'touchend';
		const onRelease = function () {
			document.removeEventListener(releaseEvent, onRelease);
			hideEvents.forEach((name) => {
				document.removeEventListener(name, onRelease);
			});
			const diff = performance.now() - Number(wave.dataset.activated);
			const delay = Math.max(250 - diff, 0);
			setTimeout(() => {
				wave.classList.remove('animation-in');
				wave.classList.add('animation-out');
				opacity(wave, 0);
				setTimeout(() => {
					wave && container.removeChild(wave);
					if (container.children.length === 0) {
						delete container.dataset.event;
					}
				}, 300);
			}, delay);
		};
		document.addEventListener(releaseEvent, onRelease);
		hideEvents.forEach((name) => {
			document.addEventListener(name, onRelease, { passive: true });
		});
	};
	const onMouseDown = function (e) {
		// Trigger on left click only
		if (e.button === 0) {
			startRipple(e.type, e);
		}
	};
	const onTouchStart = function (e) {
		if (e.changedTouches) {
			for (let i = 0; i < e.changedTouches.length; ++i) {
				startRipple(e.type, e.changedTouches[i]);
			}
		}
	};
</script>

<script>
	export let center = false;
	export let circle = false;
	export let color = 'currentColor';
	import { tick, onMount, onDestroy } from 'svelte';
	let el;
	let trigEl;
	onMount(async () => {
		await tick();
		try {
			if (center) {
				el.dataset.center = 'true';
			}
			if (circle) {
				el.dataset.circle = 'true';
			}
			el.dataset.color = color;
			trigEl = el.parentElement;
		} catch (err) {} // eslint-disable-line
		if (!trigEl) {
			console.error('Ripple: Trigger element not found.');
			return;
		}
		let style = window.getComputedStyle(trigEl);
		if (style.position.length === 0 || style.position === 'static') {
			trigEl.style.position = 'relative';
		}
		trigEl.addEventListener('touchstart', onTouchStart, { passive: true });
		trigEl.addEventListener('mousedown', onMouseDown, { passive: true });
	});
	onDestroy(() => {
		if (!trigEl) {
			return;
		}
		trigEl.removeEventListener('mousedown', onMouseDown);
		trigEl.removeEventListener('touchstart', onTouchStart);
	});
</script>

<div class="ripple" bind:this={el} />

<style>
	.ripple {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
		border-radius: inherit;
		color: inherit;
		pointer-events: none;
		z-index: 0;
		contain: strict;
	}
	.ripple :global(.animation) {
		color: inherit;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 50%;
		opacity: 0;
		pointer-events: none;
		overflow: hidden;
		will-change: transform, opacity;
	}
	.ripple :global(.animation-enter) {
		transition: none;
	}
	.ripple :global(.animation-in) {
		transition: opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1);
		transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
			opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1);
	}
	.ripple :global(.animation-out) {
		transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
