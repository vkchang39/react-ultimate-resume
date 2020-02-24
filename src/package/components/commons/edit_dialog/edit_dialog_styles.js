import { withCustomVerticalScrollbar } from '../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const { miscellaneous: { spacing } } = theme;
    return ({
        paper: {
            width: '90%',
            maxWidth: [650, '!important']
        },
        content: {
            overflowX: 'hidden',
            ...withCustomVerticalScrollbar()
        },
        actions: {},
        fullScreen: {
            '& $actions': {
                paddingRight: spacing * 3
            }
        },
        titleContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            '& > *:first-child': {
                marginRight: spacing * 2
            },
            '& > *:last-child': {
                marginLeft: spacing * 2
            }
        }
    });
};