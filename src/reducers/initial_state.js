// Initial state export for reducers
export const INITIAL_STATE = {
	all_persons: [],
	single_person: {
		picture: { url: '' },
		achievements: []
	},
	pages_info: {per_page: 0, total_pages: 0, total_objects: 0},
	authenticated: false,
	all_achievements: []
};
