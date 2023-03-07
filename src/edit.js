
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	BlockControls,
	InnerBlocks,
	__experimentalLinkControl as LinkControl
} from '@wordpress/block-editor';
import {
	ToolbarButton,
	Popover
} from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { prependHTTP } from '@wordpress/url';
import './editor.scss';


export default function Edit({ attributes, setAttributes, isSelected }) {
	const { url, targetLink, opensInNewTab } = attributes;
	const allowBlocks = ['core/group', 'core/cover'];

	const [isVisible, setIsVisible] = useState(false);
	const [isActive, setActive] = useState(false);

	const changeValue = (newValue) => {
		setAttributes({ url: prependHTTP(newValue.url), opensInNewTab: newValue.opensInNewTab });
	};

	function unlink() {
		setAttributes({
			url: undefined,
		});
	}

	useEffect(() => {
		(opensInNewTab === true) ? setAttributes({ targetLink: "_blank" }) : setAttributes({ targetLink: undefined });
	}, [opensInNewTab]);

	useEffect(() => {
		(url !== undefined) ? setActive(true) : setActive(false);
	}, [url]);

	useEffect(() => {
		if (!isSelected) {
			setIsVisible(false);
		}
	}, [isSelected]);

	return (
		<div {...useBlockProps()}>

			<BlockControls >
				<ToolbarButton
					icon={'admin-links'}
					onClick={() => { setIsVisible(true) }}
					isActive={isActive}
				>
					{isVisible &&
						<Popover>
							<LinkControl
								value={{ url: url, opensInNewTab: opensInNewTab }}
								onChange={changeValue}
								onRemove={() => { unlink() }}
							/>
						</Popover>
					}
				</ToolbarButton>
			</BlockControls>
			<InnerBlocks allowedBlocks={allowBlocks} />
		</div>
	);
}
