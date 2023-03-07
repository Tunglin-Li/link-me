import { __ } from "@wordpress/i18n";
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
	* Every block starts by registering a new block type definition.
	*
	* @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
	*/
registerBlockType(metadata.name, {
	/**
		* @see ./edit.js
		*/
	title: __("Link Me!", "link-me"),
	description: __("Add a tag to Cover and Group Block to make it linkable.", "link-me"),
	icon: {

		src: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6H10V4H4V10H6V6Z" fill="currentColor" /><path d="M10 18H6V14H4V20H10V18Z" fill="currentColor" /><path d="M14 6H18V10H20V4H14V6Z" fill="currentColor" /><path d="M14 18H18V14H20V20H14V18Z" fill="currentColor" /><path d="M12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5Z" fill="currentColor" /></svg>
	},
	edit: Edit,

	/**
		* @see ./save.js
		*/
	save,
});
