import Event from '@/utils/events';

const addClickoutSide = ({ disabled = false, handle }) => {
  if (!disabled) {
    Event.on(document.body, 'touchstart', handle);
    Event.on(document.body, 'click', handle);
  }
};

const removeClickoutSide = ({ disabled = false, handle }) => {
  if (!disabled) {
    Event.off(document.body, 'touchstart', handle);
    Event.off(document.body, 'click', handle);
  }
};

const clickoutSideHandle = (event, { onClickoutSide, ignorenode, el }) => {
  if (ignorenode && ignorenode.contains(event.target)) return;
  if (el && !el.contains(event.target)) onClickoutSide(event);
};

export default {
  addClickoutSide,
  removeClickoutSide,
  clickoutSideHandle,
};
