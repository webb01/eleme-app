<template>
<div class="cartControl">
    <transition name="move">
        <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart($event)">
            <transition name="inner">
                <span class="inner icon-remove_circle_outline"></span>
            </transition>
        </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart($event)"></div>
</div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';

export default {
    props: {
        food: {
            type: Object
            // default: {}
        }
    },
    // created() {
    //     // console.log(this.food);
    // },
    methods: {
        addCart(event) {
            if (!event._constructed) { // 解决pc两次点击事件
                return;
            }
            if (!this.food.count) {
                // this.$set(this.food, 'count', 1);
                Vue.set(this.food, 'count', 1); // 初试化food.count
            } else {
                this.food.count++;
            }
            this.$emit('cart-add', event.target);
            // console.log(this.food.count);
        },
        decreaseCart(event) {
            if (!event._constructed) { // 解决pc两次点击事件
                return;
            }
            if (this.food.count) {
                this.food.count--;
            }
            // this.food.count === 0 ? 0 : this.food.count--;
            console.log(this.food.count);
        }
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .cartControl
      font-size: 0
      .cart-decrease, .cart-add
        display: inline-block
        padding: 4px 6px 6px 6px
        &.move-enter-active, &.move-leave-active
          transition: all .4s linear
        &.move-enter, &.move-leave-active
          opacity: 0
          transform: translate3d(24px, 0, 0)
        .inner
          display: inline-block
          vertical-align: top
          line-height: 24px
          font-size: 24px
          color: rgb(0, 160, 220, 0.2)
          &.inner-enter-active, &.inner-leave-active
            transition: all 0.4s linear
            transform: rotate(0)
          &.inner-enter, &.inner-leave-active
            opacity: 0
            transform: rotate(180dge)          
      .cart-count
        display: inline-block
        vertical-align: top
        width: 12px
        padding: 6px
        line-height: 24px
        text-align: center
        font-size: 10px
        color: rgb(147, 153, 159)
      .cart-add
        display: inline-block
        vertical-align: top
        padding: 6px
        line-height: 24px
        font-size: 24px
        color: rgb(0, 160, 220)
</style>