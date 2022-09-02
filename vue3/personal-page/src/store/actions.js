export default {
    getMode(context) {
        const darkMode = localStorage.getItem('darkMode');
        if (darkMode)
            context.commit('setMode', darkMode);
        else
            context.commit('setMode', 'light');
    },
    setMode(context) {
        const theme = context.rootGetters['getMode']

        if (theme === 'light')
            context.dispatch('switchMode', 'dark')
        else
            context.dispatch('switchMode', 'light')
    },
    switchMode(context, mode) {
        localStorage.setItem('darkMode', mode)
        context.commit('setMode', mode);
    }
}