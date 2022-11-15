<template>
  <div class="main">
    <h2>Mouse Hover effect</h2>

    <div class="themes">
      <ul>
        <li class="theme-default" ref="themes">1</li>
        <li class="theme-2" ref="themes1">2</li>
        <li class="theme-3" ref="themes">3</li>
        <li class="theme-4" ref="themes">4</li>
        <li class="theme-5" ref="themes">5</li>
        <li class="theme-6" ref="themes">6</li>
      </ul>
    </div>
    <div class="grid-container">
      <div class="mask top"></div>
      <div class="mask left"></div>
      <div class="content">
        <div class="cal">
          <div class="day" tabindex="0">1</div>
          <div class="day" tabindex="0">2</div>
          <div class="day" tabindex="0">3</div>
          <div class="day" tabindex="0">4</div>
          <div class="day" tabindex="0">5</div>
          <div class="day" tabindex="0">6</div>
          <div class="day" tabindex="0">7</div>
          <div class="day" tabindex="0">8</div>
          <div class="day" tabindex="0">9</div>
          <div class="day" tabindex="0">10</div>
          <div class="day" tabindex="0">11</div>
          <div class="day" tabindex="0">12</div>
          <div class="day" tabindex="0">13</div>
          <div class="day" tabindex="0">14</div>
          <div class="day" tabindex="0">15</div>
          <div class="day" tabindex="0">16</div>
          <div class="day" tabindex="0">17</div>
          <div class="day" tabindex="0">18</div>
          <div class="day" tabindex="0">19</div>
          <div class="day" tabindex="0">20</div>
          <div class="day" tabindex="0">21</div>
          <div class="day" tabindex="0">22</div>
          <div class="day" tabindex="0">23</div>
          <div class="day" tabindex="0">24</div>
          <div class="day" tabindex="0">25</div>
          <div class="day" tabindex="0">26</div>
          <div class="day" tabindex="0">27</div>
          <div class="day" tabindex="0">28</div>
          <div class="day" tabindex="0">29</div>
          <div class="day" tabindex="0">30</div>
          <div class="day" tabindex="0">31</div>
          <div class="day">
            <div class="oom">1</div>
          </div>
          <div class="day">
            <div class="oom">2</div>
          </div>
          <div class="day">
            <div class="oom">3</div>
          </div>
          <div class="day">
            <div class="oom">4</div>
          </div>
        </div>
      </div>
      <div class="mask right"></div>
      <div class="mask bottom"></div>
    </div>

    <div id="light" ref="light" :style="`left: ${x}px; top: ${y}px;`"></div>
    <p>x: {{ x }} y: {{ y }}</p>
  </div>
</template>

<script setup>
import { useMouse } from './functions/mouse.js';

const { x, y } = useMouse();

// import { useMouse } from '@vueuse/core';

// const { x, y } = useMouse({ touch: false });

// const light = document.getElementById('light')
// document.addEventListener('mousemove', e => {
//   light.style.top = e.pageY + "px"
//   light.style.left = e.pageX + "px"
// })

// for (i = 0; i < themes.length; ++i) {
//   themes[i].addEventListener('click', (e) => {
//     document.documentElement.classList = [e.target.classList.value];
//   });
// }
</script>

<style scoped>
.main {
  height: 100%;
  margin: 0;
  overflow: hidden;
  font-weight: bold;
}

.cal {
  z-index: 5;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.day {
  user-select: none;
  text-align: center;
  font-size: 1.2rem;
  padding: 0.75rem;
  position: relative;
  z-index: 9;
  cursor: pointer;
}
.day:focus {
  outline: none;
}
.day:after {
  transition: all 0.4s;
  content: '';
  position: absolute;
  z-index: -1;
}

#light {
  position: absolute;
  width: 15rem;
  height: 15rem;
  z-index: 4;
  border-radius: 50%;
  /* transform: translate3d(-50%, -50%, 0); */
  left: 10px;
  top: 10px;
}

.grid-container {
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 401px 1fr;
  grid-template-rows: 0.5fr 250px 1fr;
  grid-gap: 0px 0px;
  grid-template-areas: 'top top top' 'left content right' 'bottom bottom bottom';
}

.top {
  grid-area: top;
}

.left {
  grid-area: left;
}

.content {
  grid-area: content;
}

.right {
  grid-area: right;
}

.bottom {
  grid-area: bottom;
}

.mask {
  position: relative;
  z-index: 99;
}

.themes {
  position: relative;
  z-index: 100;
}
.themes ul {
  margin: 0;
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: center;
}
.themes li {
  width: 3rem;
  height: 3rem;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  border: 2px solid transparent;
}
.themes li:hover {
  opacity: 0.8;
}

.theme-default {
  background-color: #292c33;
  color: #eee;
}
.theme-default .mask {
  background: #292c33;
}
.theme-default .oom {
  color: rgba(238, 238, 238, 0.4);
}
.theme-default #light {
  background: radial-gradient(
    ellipse at center,
    rgba(238, 238, 238, 0.5) 0%,
    rgba(238, 238, 238, 0) 50%
  );
}
.theme-default .day {
  border: 2px solid #292c33;
}
.theme-default .day:after {
  background-color: #292c33;
  top: 2px;
  bottom: 2px;
  right: 2px;
  left: 2px;
}
.theme-default .day:not(.oom):hover {
  background-color: #eee;
}
.theme-default .day:not(.oom):hover:after {
  background-color: #40444f;
}
.theme-default .themes {
  background-color: #292c33;
}
.theme-default .theme-default {
  border-color: #fff;
}

.theme-2 {
  background-color: #233b23;
  color: #bada55;
}
.theme-2 .mask {
  background: #233b23;
}
.theme-2 .oom {
  color: rgba(186, 218, 85, 0.4);
}
.theme-2 #light {
  background: radial-gradient(
    ellipse at center,
    rgba(186, 218, 85, 0.5) 0%,
    rgba(186, 218, 85, 0) 50%
  );
}
.theme-2 .day {
  border: 2px solid #233b23;
}
.theme-2 .day:after {
  background-color: #233b23;
  top: 3px;
  bottom: 3px;
  right: 3px;
  left: 3px;
}
.theme-2 .day:not(.oom):hover {
  background-color: #bada55;
}
.theme-2 .day:not(.oom):hover:after {
  background-color: #1a2b1a;
}
.theme-2 .themes {
  background-color: #233b23;
}
.theme-2 .theme-2 {
  border-color: #fff;
}

.theme-3 {
  background-color: #112;
  color: #cd7bff;
}
.theme-3 .mask {
  background: #112;
}
.theme-3 .oom {
  color: rgba(205, 123, 255, 0.4);
}
.theme-3 #light {
  background: radial-gradient(
    ellipse at center,
    rgba(205, 123, 255, 0.5) 0%,
    rgba(205, 123, 255, 0) 50%
  );
}
.theme-3 .day {
  border: 2px solid #112;
}
.theme-3 .day:after {
  background-color: #112;
  top: 2px;
  bottom: 2px;
  right: 2px;
  left: 2px;
}
.theme-3 .day:not(.oom):hover {
  background-color: #cd7bff;
}
.theme-3 .day:not(.oom):hover:after {
  background-color: #222244;
}
.theme-3 .themes {
  background-color: #112;
}
.theme-3 .theme-3 {
  border-color: #fff;
}

.theme-4 {
  background-color: #cd7bff;
  color: #111;
}
.theme-4 .mask {
  background: #cd7bff;
}
.theme-4 .oom {
  color: rgba(17, 17, 17, 0.4);
}
.theme-4 #light {
  background: radial-gradient(
    ellipse at center,
    rgba(17, 17, 17, 0.5) 0%,
    rgba(17, 17, 17, 0) 50%
  );
}
.theme-4 .day {
  border: 2px solid #cd7bff;
}
.theme-4 .day:after {
  background-color: #cd7bff;
  top: 1px;
  bottom: 1px;
  right: 1px;
  left: 1px;
}
.theme-4 .day:not(.oom):hover {
  background-color: #ba48ff;
}
.theme-4 .day:not(.oom):hover:after {
  background-color: #c362ff;
}
.theme-4 .themes {
  background-color: #cd7bff;
}
.theme-4 .theme-4 {
  border-color: #fff;
}

.theme-5 {
  background-color: #211;
  color: #db2a2a;
}
.theme-5 .mask {
  background: #211;
}
.theme-5 .oom {
  color: rgba(219, 42, 42, 0.4);
}
.theme-5 #light {
  background: radial-gradient(
    ellipse at center,
    rgba(219, 42, 42, 0.5) 0%,
    rgba(219, 42, 42, 0) 50%
  );
}
.theme-5 .day {
  border: 2px solid #211;
}
.theme-5 .day:after {
  background-color: #211;
  top: 2px;
  bottom: 2px;
  right: 2px;
  left: 2px;
}
.theme-5 .day:not(.oom):hover {
  background-color: #db2a2a;
}
.theme-5 .day:not(.oom):hover:after {
  background-color: #110909;
}
.theme-5 .themes {
  background-color: #211;
}
.theme-5 .theme-5 {
  border-color: #fff;
}

.theme-6 {
  background-color: lightgoldenrodyellow;
  color: rebeccapurple;
}
.theme-6 .mask {
  background: lightgoldenrodyellow;
}
.theme-6 .oom {
  color: rgba(102, 51, 153, 0.4);
}
.theme-6 #light {
  background: radial-gradient(
    ellipse at center,
    rgba(0, 250, 154, 0.5) 0%,
    rgba(0, 250, 154, 0) 50%
  );
}
.theme-6 .day {
  border: 2px solid lightgoldenrodyellow;
}
.theme-6 .day:after {
  background-color: lightgoldenrodyellow;
  top: 3px;
  bottom: 3px;
  right: 3px;
  left: 3px;
}
.theme-6 .day:not(.oom):hover {
  background-color: darksalmon;
}
.theme-6 .day:not(.oom):hover:after {
  background-color: lightgoldenrodyellow;
}
.theme-6 .themes {
  background-color: lightgoldenrodyellow;
}
.theme-6 .theme-6 {
  border-color: #fff;
}

.day {
  transition: all 0.2s;
}
.day:focus {
  background-color: #ccc;
}
.day:nth-child(10):focus {
  transform: translateY(-0.35rem);
}
.day:nth-child(13) {
  transition-duration: 0.6s;
}
.day:nth-child(13):focus {
  transform: rotate(360deg);
}
.day:nth-child(20) {
  transition-duration: 0.6s;
}
.day:nth-child(20):focus {
  transform: rotateY(180deg);
}
.day:nth-child(24) {
  transition-duration: 0.4s;
}
.day:nth-child(24):focus {
  z-index: 19;
  transform: rotate(10deg) scale(1.1);
}
.day:nth-child(29) {
  transition-duration: 0.4s;
}
.day:nth-child(29):focus {
  z-index: 19;
  transform: rotate(10deg) translate3d(0.25rem, -0.3rem, 2rem);
}
</style>
