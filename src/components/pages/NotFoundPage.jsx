import { notFoundPage } from '../../content/copy.js';
import StatusMessage from '../ui/StatusMessage/StatusMessage.jsx';

export default function NotFoundPage() {
	return <StatusMessage copy={notFoundPage} />;
}
