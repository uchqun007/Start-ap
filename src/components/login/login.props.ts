export interface LoginProps {
	onNavigationStateComponent: (component: 'login' | 'register' | 'verification' | 'account-recovery') => void;
}
