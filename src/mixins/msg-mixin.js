export default {
    methods: {
        infoMsg(text) {
            const msg = {
                text: text,
                variant: 'info',
                title: 'Information',
                iconClass: 'cil-info',
                textClass: 'text-info'
            }
            this.renderMsg(msg)
        },
        successMsg(text) {
            const msg = {
                text: text,
                variant: 'success',
                title: 'Success',
                iconClass: 'cil-check-circle',
                textClass: 'text-success'
            }
            this.renderMsg(msg)
        },
        warningMsg(text) {
            const msg = {
                text: text,
                variant: 'warning',
                title: 'Warning',
                iconClass: 'cil-warning',
                textClass: 'text-warning'
            }
            this.renderMsg(msg)
        },
        errorMsg(text) {
            const msg = {
                text: text,
                variant: 'danger',
                title: 'Error',
                iconClass: 'cil-x-circle',
                textClass: 'text-danger'
            }
            this.renderMsg(msg)
        },
        renderMsg(msg) {
            const vNodeTitle = this.$createElement('div', {}, [
                this.$createElement('i', { class: msg.iconClass }),
                this.$createElement('strong', { class: 'ml-2 mr-auto' }, msg.title)
            ])
            this.$bvToast.toast(msg.text, {
                title: vNodeTitle,
                variant: msg.variant,
                solid: true,
                toaster: 'b-toaster-bottom-center mb-2'
            })
            this.$store.commit('addMessage', msg)
        }
    }
}