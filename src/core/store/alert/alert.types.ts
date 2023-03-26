export type AlertType = 'info' | 'error';

export interface IAlert {
    id: string;
    text: string;
    type: AlertType;
    isSubmit?: boolean;
}
