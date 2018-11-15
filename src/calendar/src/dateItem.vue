<script>
export default {
  name: 'zaCalendar-item',
  props: {
    data: Object,
    prefixCls: String,
    dateRender: Function,
  },
  render(h, context) {
    return (
      <li class={
        `${this.prefixCls}_dates-item${this.data.active ? ' active' : ''}${this.data.inrange ? ' inrange' : ''}${this.data.disabled ? ' disabled' : ''}`}>
        <div class={`${this.prefixCls}_dates-item_warp`}>
          {this.dateRender(this.data.date, this.data.disabled)}
        </div>
      </li>
    );
  },
};
</script>
