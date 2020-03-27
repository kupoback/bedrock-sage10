<template>
	<div class="col-xs-12">
		<button id="show-modal" @click="showModal = true">Show Modal</button>
		<div v-if="showModal">
			<div class="modal-mask">
				<div class="modal-wrapper">
					<div class="modal-container">
						<h3 slot="header">custom header</h3>
						<div class="modal-header">
							<slot name="header">
								default header
							</slot>
						</div>

						<div class="modal-body">
							<slot name="body">
								default body
							</slot>
						</div>

						<div class="modal-footer">
							<slot name="footer">
								default footer
								<button class="modal-default-button" @click="showModal = false">
									OK
								</button>
							</slot>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="application/javascript">
    export default {
        data() {
            return {
                showModal: false
            }
        },
        name: "Modal"
    };
</script>

<style scoped lang="scss">
	.modal-mask {
		h3 {
			color: blue;
			display: flex;
		}
		.modal-body {
			color: red;
		}
	}
</style>
