<template>
  <div class="mapouter">
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          class="gmap_iframe"
          width="100%"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Debre Eliyas office of Agriculture&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script></script>
<style>
.mapouter {
  position: relative;
  text-align: right;
  width: 90%;
  height: 150px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width: 90%;
  height: 150px;
}
.gmap_iframe {
  height: 150px !important;
}
</style>
