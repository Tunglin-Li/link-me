<?php
/**
 * Plugin Name:       Link Me!
 * Description:       Add a tag to Cover and Group Block to make it linkable.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            平凡以上
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       link-me
 * Domain Path:       /languages
 *
 * @package           wpaa
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function wpaa_link_me_block_init() {
	register_block_type( __DIR__ . '/build' );
	wp_set_script_translations(
		'wpaa-link-me-editor-script',
		'link-me',
		__DIR__ . '/languages/'
	);

}
add_action( 'init', 'wpaa_link_me_block_init' );
