<template>
  <div class="main theme-default">
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

    <div id="light" :style="`left: ${x}px; top: ${y}px;`"></div>

    <p>x: {{ x }} y: {{ y }}</p>
  </div>
</template>

<script setup>
import { useMouse } from './functions/mouse.js';

const { x, y } = useMouse();
</script>

<style scoped>
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
  transform: translate3d(-60%, -100%, 0);
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
