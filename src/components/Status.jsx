import { cn } from "../helpers";

export const Status = ({ label, type = 'default' }) => {
    return (
        <div className={cn("text-xs font-bold", {
            'text-primary': type === 'default',
            'text-error': type === 'danger',
            'text-success': type === 'success',
            'text-warning': type === 'warning',
        })}>
            {label}
        </div>
    );
};
