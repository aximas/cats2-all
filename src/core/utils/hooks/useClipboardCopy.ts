// import { addAlert } from '@core/store/alert/alert.thunks';
// import { store } from '@core/store/store';

export const useClipboardCopy = () => {
    const copyToClipboard = (copyText: string) => {
        let isCopied = false;
        const isiOSDevice = navigator.userAgent.match(/ipad|iphone/i);

        if ('clipboard' in navigator) {
            navigator.clipboard
                .writeText(copyText)
                ?.then(() => {
                    isCopied = true;
                })
                .catch((err) => console.log(err));
        }

        // if (isCopied) {
        //     return store.dispatch(
        //         addAlert({
        //             text: 'Copied to clipboard',
        //             type: 'info'
        //         })
        //     );
        // }

        document.execCommand('copy', true, copyText);

        const textarea = <HTMLTextAreaElement>(
            document.getElementById('clipboard-field')
        );
        textarea.value = copyText;

        if (isiOSDevice) {
            const editable = textarea.contentEditable;
            const readOnly = textarea.readOnly;
            textarea.contentEditable = 'true';
            textarea.readOnly = false;
            const range = document.createRange();
            range.selectNodeContents(textarea);
            const selection = window.getSelection();
            if (selection) {
                selection.removeAllRanges();
                selection.addRange(range);
            }
            textarea.setSelectionRange(0, 999999);
            textarea.contentEditable = editable;
            textarea.readOnly = readOnly;
        } else {
            textarea.readOnly = true;
            textarea.focus();
            textarea.select();
        }

        document.execCommand('copy');

        // store.dispatch(
        //     addAlert({
        //         text: 'Copied to clipboard',
        //         type: 'info'
        //     })
        // );
    };

    return { copyToClipboard };
};
