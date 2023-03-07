
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { url, targetLink } = attributes;
	return (
		<div {...useBlockProps.save()}>
			<a href={url} target={targetLink} rel="noopener">
				<InnerBlocks.Content />
			</a>
		</div>
	);
}
