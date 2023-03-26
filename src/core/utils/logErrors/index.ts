import { store } from '@core/store/store';

export const logErrors = (err: string | unknown) => {
    if (typeof err === 'string') {
        store.dispatch({
            type: 'alert/Add',
            payload: { text: err, type: 'error', isSubmit: true }
        });
    } else if (err && typeof err === 'object') {
        let formattedErrors: string | number = '';

        if ('detail' in err) {
            const short = err as Record<string, string>;
            formattedErrors = short.detail;
        } else if ('message' in err) {
            const asObj = err as { message: string; code: number };
            /*** Alert doesn't show aborted or canceled requests error */
            if (
                'message' in asObj &&
                asObj.message === 'The user aborted a request.'
            )
                return;
            if (
                'code' in asObj &&
                (asObj.code === -32002 ||
                    asObj.message.includes('Already processing'))
            ) {
                formattedErrors =
                    'Could not connect. Please, check your MetaMask connection.';
            } else if (
                asObj.code === -32603 ||
                asObj.message.includes('amount exceeds balance')
            ) {
                formattedErrors =
                    'Transaction failed because transfer amount exceeds balance.';
            } else if (asObj.message.includes('reverted by the EVM')) {
                formattedErrors =
                    'Transaction has been reverted by the EVM. Try to Sync';
            } else if (asObj.message.includes('Failed to fetch')) {
                formattedErrors =
                    'Request processing has been interrupted. Try to submit your request later.';
            } else {
                formattedErrors = asObj.message;
            }
        } else {
            const errors = Object.entries(err);
            for (const error of errors) {
                formattedErrors += `${error[0]}: ${error[1]} <br>`;
            }
        }
        store.dispatch({
            type: 'alert/Add',
            payload: { text: formattedErrors, type: 'error', isSubmit: true }
        });
    }
};
