const store = {
    debug: true,
    state: {
        isSidebarMin: false,
        isSidebarShown: true,
    },
    toggleSidebarMin() {
        this.state.isSidebarMin = !this.state.isSidebarMin
        if (this.debug) {
            console.debug(`isSidebarMin: ${this.state.isSidebarMin}`)
        }
    },
    toggleSidebarShown() {
        this.state.isSidebarShown = !this.state.isSidebarShown
        if (this.debug) {
            console.debug(`isSidebarShown: ${this.state.isSidebarShown}`)
        }
    }
}

export default store