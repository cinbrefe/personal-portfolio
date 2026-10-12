import { useEffect, useRef } from 'react';

// Focuses the returned ref's element after mount, and again whenever resetKey changes (e.g. ProjectPage's slug)
export default function useFocusOnMount(resetKey) {
	const ref = useRef(null);

	useEffect(() => {
		ref.current?.focus();
	}, [resetKey]);

	return ref;
}
