// Spilde Config
new Splide( '.splide', {
	type: 'loop',
	focus: 'center',
	perPage: 3,
	padding: {
		right: '5rem',
		left: '5rem',
	},
	breakpoints: {
		'768': {
			perPage: 1,
			gap    : '1rem',
		},
		'480': {
			perPage: 1,
			gap    : '1rem',
		},
	}
} ).mount();
// End Spilde Config