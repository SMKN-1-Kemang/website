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
			padding: {
				right: '0rem',
				left: '0rem',
			},
			perPage: 1,
			gap    : '1rem',
		},
		'480': {
			padding: {
				right: '0rem',
				left: '0rem',
			},
			perPage: 1,
			gap    : '1rem',
		},
	}
} ).mount();
// End Spilde Config