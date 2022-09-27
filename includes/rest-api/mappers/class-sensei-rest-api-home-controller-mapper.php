<?php
/**
 * File containing Sensei_REST_API_Home_Controller_Mapper class.
 *
 * @package sensei-lms
 * @since   $$next-version$$
 */

/**
 * Class responsible for mapping Sensei Home domain classes to REST structure.
 */
class Sensei_REST_API_Home_Controller_Mapper {

	/**
	 * Maps an array of Sensei_Home_Quick_Links_Category to a basic array structure to be used as response for the REST API.
	 *
	 * @param Sensei_Home_Quick_Links_Category[] $categories A list of Quick Links categories.
	 * @return array
	 */
	public function map_quick_links( array $categories ): array {
		return array_map( [ $this, 'map_quick_links_category' ], $categories );
	}

	/**
	 * Maps a Quick Links category to its REST representation.
	 *
	 * @param Sensei_Home_Quick_Links_Category $category The quick links category to map.
	 * @return array
	 */
	private function map_quick_links_category( Sensei_Home_Quick_Links_Category $category ): array {
		return [
			'title' => $category->get_title(),
			'items' => array_map( [ $this, 'map_quick_links_item' ], $category->get_items() ),
		];
	}

	/**
	 * Maps a Quick Links item to its REST representation.
	 * Url might represent some special actions by using the `sensei://` protocol.
	 * Check `Sensei_Home_Quick_Links_Provider::ACTION_*` constants for available values.
	 *
	 * @param Sensei_Home_Quick_Links_Item $item The quick links item to map.
	 * @return array
	 */
	private function map_quick_links_item( Sensei_Home_Quick_Links_Item $item ): array {
		return [
			'title' => $item->get_title(),
			'url'   => $item->get_url(),
		];
	}

	/**
	 * Maps an array of Sensei_Home_Help_Category to a basic array structure to be used as response for the REST API.
	 *
	 * @param Sensei_Home_Help_Category[] $categories A list of Help categories.
	 * @return array
	 */
	public function map_help( array $categories ): array {
		return array_map( [ $this, 'map_help_category' ], $categories );
	}

	/**
	 * Maps a Help category to its REST representation.
	 *
	 * @param Sensei_Home_Help_Category $category The help category to map.
	 * @return array
	 */
	private function map_help_category( Sensei_Home_Help_Category $category ): array {
		return [
			'title' => $category->get_title(),
			'items' => array_map( [ $this, 'map_help_item' ], $category->get_items() ),
		];
	}

	/**
	 * Maps a Help item to its REST representation.
	 *
	 * @param Sensei_Home_Help_Item $item The help item to map.
	 * @return array
	 */
	private function map_help_item( Sensei_Home_Help_Item $item ): array {
		return [
			'title'      => $item->get_title(),
			'url'        => $item->get_url(),
			'icon'       => $item->get_icon(),
			'extra_link' => ! is_null( $item->get_extra_link() ) ? $this->map_help_extra_link( $item->get_extra_link() ) : null,
		];
	}

	/**
	 * Maps an extra link for a Help item to its REST representation.
	 *
	 * @param Sensei_Home_Help_Extra_Link $link The help extra link to map.
	 * @return array
	 */
	private function map_help_extra_link( Sensei_Home_Help_Extra_Link $link ): array {
		return [
			'label' => $link->get_label(),
			'url'   => $link->get_url(),
		];
	}
}
