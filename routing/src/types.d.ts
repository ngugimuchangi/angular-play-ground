// Implement this interface for components that need to prevent navigation away
// from the component. For example, if the user has unsaved changes.
interface CanExit {
  canExit(): boolean | Promise<boolean> | import('rxjs').Observable<boolean>;
}
