export { getPositionPlacement };

function getPositionPlacement(
	positionPlacement,
	left,
	top,
	withArrow,
	referenceBottom,
	referenceData,
	referenceLeft,
	referenceTop,
	element,
	gutter,
	arrowSize,
	arrowTop,
	arrowLeft,
	arrowDistance
) {
	switch (positionPlacement) {
		case 'top-start':
			left = referenceLeft;
			top = referenceTop - element.clientHeight - gutter;
			if (withArrow) top -= arrowSize;
			arrowTop = element.clientHeight - arrowSize - 1;
			break;
		case 'top-center':
			left = referenceLeft + referenceData.width / 2 - element.clientWidth / 2;
			top = referenceTop - element.clientHeight - gutter;
			if (withArrow) top -= arrowSize;
			arrowTop = element.clientHeight - arrowSize - 1;
			arrowLeft = element.clientWidth / 2 - arrowSize;
			break;
		case 'top-end':
			left = referenceLeft + referenceData.width - element.clientWidth;
			top = referenceTop - element.clientHeight - gutter;
			if (withArrow) top -= arrowSize;
			arrowTop = element.clientHeight - arrowSize - 1;
			arrowLeft = element.clientWidth - arrowSize * 4 - arrowDistance;
			break;
		case 'bottom-start':
			left = referenceLeft;
			top = referenceBottom + gutter;
			if (withArrow) top += arrowSize;
			break;
		case 'bottom-center':
			left = referenceLeft + referenceData.width / 2 - element.clientWidth / 2;
			top = referenceBottom + gutter;
			if (withArrow) top += arrowSize;
			arrowLeft = element.clientWidth / 2 - arrowSize;
			break;
		case 'bottom-end':
			left = referenceLeft + referenceData.width - element.clientWidth;
			top = referenceBottom + gutter;
			if (withArrow) top += arrowSize;
			arrowLeft = element.clientWidth - arrowSize * 4 - arrowDistance;
			break;
		case 'left-start':
			left = referenceLeft - element.clientWidth - gutter;
			top = referenceTop;
			if (withArrow) left -= arrowSize;
			arrowTop = arrowSize + arrowDistance;
			arrowLeft = element.clientWidth - arrowSize - 1;
			break;
		case 'left-center':
			left = referenceLeft - element.clientWidth - gutter;
			top = referenceBottom - referenceData.height / 2 - element.clientHeight / 2;
			if (withArrow) left -= arrowSize;
			arrowTop = element.clientHeight / 2 - arrowSize;
			arrowLeft = element.clientWidth - arrowSize - 1;
			break;
		case 'left-end':
			left = referenceLeft - element.clientWidth - gutter;
			top = referenceBottom - element.clientHeight;
			if (withArrow) left -= arrowSize;
			arrowTop = element.clientHeight - arrowSize * 4 - arrowDistance;
			arrowLeft = element.clientWidth - arrowSize - 1;
			break;
		case 'right-start':
			left = referenceLeft + referenceData.width + gutter;
			top = referenceTop;
			if (withArrow) left += arrowSize;
			arrowTop = arrowSize + arrowDistance;
			arrowLeft = -1 * arrowSize - 1;
			break;
		case 'right-center':
			left = referenceLeft + referenceData.width + gutter;
			top = referenceBottom - referenceData.height / 2 - element.clientHeight / 2;
			if (withArrow) left += arrowSize;
			arrowTop = element.clientHeight / 2 - arrowSize;
			arrowLeft = -1 * arrowSize - 1;
			break;
		case 'right-end':
			left = referenceLeft + referenceData.width + gutter;
			top = referenceBottom - element.clientHeight;
			if (withArrow) left += arrowSize;
			arrowTop = element.clientHeight - arrowSize * 4 - arrowDistance;
			arrowLeft = -1 * arrowSize - 1;
			break;
	}
}
