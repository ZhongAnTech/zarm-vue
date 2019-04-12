<script>
export default {
  name: 'zaCalendar-item',
  props: {
    data: Object,
    prefixCls: String,
    dateRender: Function,
  },
  render() {
    return (
      <li class={
        `${this.prefixCls}__dates-item${this.data.active ? ' active' : ''}${this.data.inrange ? ' inrange' : ''}${this.data.disabled ? ' disabled' : ''}`}>
        <div class={`${this.prefixCls}__warp`}>
          {this.dateRender(this.data.date, this.data.disabled)}
        </div>
      </li>
    );
  },
};
</script>
