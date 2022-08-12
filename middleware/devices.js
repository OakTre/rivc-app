export default function (context) {
  context.isMobile = (process.client) ? window.matchMedia('(max-width: 992px)') : false
}
