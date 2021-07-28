import React from "react";

const IconCat = ({
  width = "100%",
  height = "100%",
  viewBox = "-26 0 512 512.07465",
}) => (
  <svg height={height} viewBox={viewBox} width={width}>
    <path d="m179.300781 409.507812c-4.710937 0-8.53125 3.820313-8.53125 8.535157v8.53125c-.0625 14.234375 8.753907 26.996093 22.082031 31.980469 13.332032 4.984374 28.359376 1.136718 37.652344-9.640626 9.292969 10.777344 24.316406 14.625 37.648438 9.640626 13.332031-4.984376 22.144531-17.746094 22.082031-31.980469v-8.53125c0-4.714844-3.820313-8.535157-8.53125-8.535157-4.714844 0-8.535156 3.820313-8.535156 8.535157v8.53125c0 9.425781-7.640625 17.066406-17.066407 17.066406-9.425781 0-17.066406-7.640625-17.066406-17.066406v-27.203125c3.003906-1.105469 5.71875-2.882813 7.9375-5.191406l12.773438-13.65625c4.835937-4.953126 6.210937-12.332032 3.476562-18.695313-3.65625-7.621094-11.480468-12.355469-19.929687-12.054687h-25.582031c-8.449219-.300782-16.269532 4.433593-19.925782 12.054687-2.730468 6.359375-1.363281 13.738281 3.46875 18.695313l12.789063 13.65625c2.214843 2.308593 4.925781 4.085937 7.925781 5.191406v27.203125c0 9.425781-7.640625 17.066406-17.066406 17.066406-9.425782 0-17.066406-7.640625-17.066406-17.066406v-8.53125c0-4.714844-3.820313-8.535157-8.535157-8.535157zm34.125-40.851562c.101563-.398438 1.378907-1.816406 4.285157-1.816406h25.582031c2.910156 0 4.183593 1.417968 3.992187 2.019531l-12.773437 13.652344c-2.390625 1.726562-5.617188 1.726562-8.007813 0zm0 0" />
    <path d="m122.679688 320.65625c15.1875-5.9375 27.273437-6.640625 35.949218-2.054688 6.050782 3.484376 10.488282 9.214844 12.339844 15.949219 1.074219 4.523438 5.570312 7.355469 10.113281 6.367188 4.542969-.984375 7.460938-5.429688 6.5625-9.988281-2.914062-11.539063-10.410156-21.390626-20.757812-27.265626-13.277344-7.144531-30.234375-6.777343-50.425781 1.09375-4.390626 1.71875-6.558594 6.667969-4.84375 11.058594 1.71875 4.390625 6.667968 6.558594 11.0625 4.839844zm0 0" />
    <path d="m271.386719 341.054688c2.210937.46875 4.523437.042968 6.421875-1.1875 1.898437-1.234376 3.230468-3.171876 3.703125-5.382813 1.824219-6.660156 6.195312-12.332031 12.164062-15.796875 8.675781-4.675781 20.828125-4.003906 36.117188 1.960938 4.390625 1.71875 9.34375-.449219 11.058593-4.839844 1.71875-4.390625-.449218-9.34375-4.839843-11.058594-20.183594-7.875-37.144531-8.242188-50.425781-1.097656-10.347657 5.878906-17.847657 15.730468-20.757813 27.269531-.476563 2.210937-.050781 4.523437 1.175781 6.425781 1.230469 1.898438 3.167969 3.234375 5.382813 3.707032zm0 0" />
    <path d="m8.636719 332.707031c7.765625.007813 15.527343.496094 23.234375 1.457031-4.011719 13.371094-6.089844 27.25-6.167969 41.210938v.074219c-7.691406 2.269531-15.027344 5.601562-21.800781 9.890625-2.566406 1.679687-4.035156 4.605468-3.8476565 7.667968.1875005 3.0625 2.0039065 5.785157 4.7578125 7.136719 2.753906 1.351563 6.019531 1.121094 8.558594-.601562 4.289062-2.742188 8.894531-4.960938 13.714844-6.609375 1.496093 10.363281 4.464843 20.460937 8.820312 29.984375-15.800781 10.359375-25.878906 27.480469-27.269531 46.324219 0 26.316406 26.15625 42.664062 68.265625 42.664062 18.992187 1.167969 37.859375-3.804688 53.808594-14.179688 32.359374 9.742188 66.003906 14.523438 99.792968 14.179688 33.789063.34375 67.433594-4.4375 99.789063-14.179688 15.949219 10.375 34.816406 15.347657 53.808593 14.179688 42.109376 0 68.265626-16.347656 68.265626-42.664062-1.386719-18.84375-11.46875-35.964844-27.269532-46.324219 4.355469-9.523438 7.324219-19.621094 8.820313-29.984375 4.820312 1.648437 9.425781 3.867187 13.71875 6.609375 2.535156 1.722656 5.800781 1.953125 8.554687.601562 2.753906-1.351562 4.570313-4.074219 4.761719-7.136719.1875-3.0625-1.28125-5.988281-3.851563-7.667968-6.773437-4.289063-14.109374-7.621094-21.800781-9.890625v-.074219c-.074219-13.960938-2.152343-27.839844-6.167969-41.210938 7.707032-.960937 15.46875-1.445312 23.234376-1.457031 4.714843 0 8.535156-3.820312 8.535156-8.53125 0-4.714843-3.820313-8.535156-8.535156-8.535156-9.738282.003906-19.464844.691406-29.109376 2.054687-3.585937-8.792968-7.832031-17.304687-12.695312-25.460937 5.613281-18.222656 27.605469-94.890625 8.648438-121.035156-4.027344-5.832031-10.699219-9.265625-17.785157-9.15625-12.707031.96875-25.0625 4.632812-36.242187 10.75-21.832032-30.859375-60.328125-52.539063-104.207032-59.503907-.144531-11.625-1.605468-23.195312-4.351562-34.496093-1.914062-9.46875 1.597656-19.21875 9.109375-25.296875 10.644531-7.171875 28.027344 3.925781 35 9.023437 7.382813 5.480469 17.132813 6.582031 25.550781 2.886719 8.417969-3.691406 14.210938-11.617188 15.171875-20.761719.964844-9.140625-3.050781-18.097656-10.511719-23.464843-46.835937-34.277344-81.144531-18.617188-93.777343-10.257813-25.328125 18.0625-37.265625 49.621094-30.230469 79.925781 1.695312 6.921875 2.679688 13.996094 2.929688 21.117188-47.957032 5.085937-90.621094 27.640625-114.027344 60.769531-11.109375-6.070313-23.382813-9.714844-36.003906-10.691406-7.097657-.109375-13.785157 3.332031-17.824219 9.167969-18.882813 26.035156 3 102.480468 8.597656 120.675781-4.9375 8.261719-9.242187 16.886719-12.875 25.800781-9.640625-1.359375-19.363281-2.042969-29.097656-2.046875-4.714844 0-8.535157 3.820313-8.535157 8.535156 0 4.710938 3.820313 8.53125 8.535157 8.53125zm17.066406 136.535157c0-19.207032 23.625-42.667969 51.199219-42.667969 27.574218 0 51.199218 23.460937 51.199218 42.667969 0 12.421874-11.476562 19.554687-26.363281 23 .488281-1.941407.746094-3.933594.765625-5.933594v-17.066406c0-4.714844-3.820312-8.535157-8.535156-8.535157-4.710938 0-8.53125 3.820313-8.53125 8.535157v17.066406c0 4.710937-3.820312 8.53125-8.535156 8.53125-4.710938 0-8.535156-3.820313-8.535156-8.53125v-17.066406c0-4.714844-3.820313-8.535157-8.53125-8.535157-4.714844 0-8.535157 3.820313-8.535157 8.535157v17.066406c.019531 2 .277344 3.992187.765625 5.933594-14.886718-3.445313-26.363281-10.578126-26.363281-23zm409.597656 0c0 12.421874-11.476562 19.554687-26.359375 23 .484375-1.941407.742188-3.933594.761719-5.933594v-17.066406c0-4.714844-3.820313-8.535157-8.535156-8.535157-4.710938 0-8.53125 3.820313-8.53125 8.535157v17.066406c0 4.710937-3.820313 8.53125-8.535157 8.53125-4.710937 0-8.53125-3.820313-8.53125-8.53125v-17.066406c0-4.714844-3.820312-8.535157-8.535156-8.535157-4.710937 0-8.53125 3.820313-8.53125 8.535157v17.066406c.019532 2 .273438 3.992187.761719 5.933594-14.886719-3.445313-26.363281-10.578126-26.363281-23 0-19.207032 23.625-42.667969 51.199218-42.667969 27.574219 0 51.199219 23.46875 51.199219 42.667969zm-211.789062-382.457032c-5.480469-23.34375 3.652343-47.691406 23.132812-61.667968 11.925781-7.886719 37.40625-17.109376 74.226563 9.839843 2.460937 1.800781 3.777344 4.773438 3.449218 7.808594-.324218 3.03125-2.246093 5.65625-5.035156 6.890625-2.785156 1.234375-6.023437.882812-8.484375-.914062-21.191406-15.496094-40.574219-18.835938-54.566406-9.425782-13.460937 10.074219-19.792969 27.089844-16.191406 43.511719 2.292969 9.347656 3.59375 18.910156 3.890625 28.527344-4.449219-.304688-8.917969-.515625-13.429688-.515625-1.210937 0-2.40625.082031-3.613281.105468-.308594-8.148437-1.441406-16.242187-3.378906-24.160156zm6.992187 41.121094c49.746094 0 95.496094 20.542969 119.476563 52.949219-11.4375 6.472656-24.058594 14.488281-38.035157 24.285156-51.75-23.210937-110.941406-23.238281-162.710937-.074219-14.046875-9.800781-26.714844-17.816406-38.171875-24.28125 23.917969-32.363281 69.648438-52.878906 119.441406-52.878906zm-162.476562 162.476562c-15.640625-47.894531-21.117188-96.851562-12.203125-109.148437.839843-1.402344 2.382812-2.21875 4.011719-2.125 12.175781 1.351563 23.898437 5.394531 34.316406 11.832031.074218.046875.109375.121094.183594.167969.277343.136719.5625.257813.851562.363281 16.710938 9.0625 32.8125 19.203125 48.203125 30.355469 2.511719 1.78125 5.785156 2.070313 8.566406.753906 49.726563-23.75 107.53125-23.722656 157.234375.074219 2.792969 1.332031 6.089844 1.046875 8.609375-.753906 38.21875-27.195313 68.703125-42.792969 83.625-42.792969 1.609375-.089844 3.136719.722656 3.964844 2.105469 8.960937 12.359375 3.460937 61.480468-12.25 109.5-.789063 2.40625-.46875 5.035156.875 7.179687 4.585937 7.355469 8.617187 15.039063 12.070313 22.984375-18.8125 3.929688-36.703126 11.421875-52.703126 22.070313-3.675781 2.851562-4.386718 8.121093-1.601562 11.847656s8.042969 4.535156 11.816406 1.816406c14.824219-9.511719 31.304688-16.148437 48.582032-19.566406 3.449218 11.046875 5.425781 22.503906 5.878906 34.070313-14.015625-2.644532-28.230469-4.074219-42.488282-4.277344-4.714843 0-8.535156 3.820312-8.535156 8.535156 0 4.710938 3.820313 8.53125 8.535156 8.53125 14.054688.25 28.0625 1.746094 41.851563 4.46875-1.128906 9.066406-3.578125 17.917969-7.269531 26.277344-8.269532-3.382813-17.117188-5.128906-26.050782-5.144532-38.449218 0-68.265624 32.109376-68.265624 59.734376-.03125 4.886718.972656 9.726562 2.941406 14.203124-28.761719 7.832032-58.464844 11.667969-88.273438 11.394532-29.808594.273437-59.511718-3.5625-88.277344-11.394532 1.96875-4.476562 2.972657-9.316406 2.941407-14.203124 0-27.625-29.816407-59.734376-68.265625-59.734376-8.933594.015626-17.78125 1.761719-26.050782 5.144532-3.691406-8.359375-6.140624-17.210938-7.269531-26.277344 13.792969-2.722656 27.796875-4.21875 41.855469-4.46875 4.710938 0 8.53125-3.820312 8.53125-8.53125 0-4.714844-3.820312-8.535156-8.53125-8.535156-14.261719.203125-28.480469 1.632812-42.492188 4.277344.449219-11.5625 2.425782-23.019532 5.875-34.066407 17.277344 3.414063 33.757813 10.050781 48.582032 19.5625 3.773437 2.714844 9.03125 1.910157 11.816406-1.816406 2.789062-3.722656 2.078125-8.996094-1.597656-11.847656-16.003906-10.652344-33.894532-18.144531-52.714844-22.074219 3.496094-8.066406 7.589844-15.863281 12.25-23.316406 1.339844-2.144532 1.660156-4.773438.871094-7.175782zm0 0" />
  </svg>
);

export default IconCat;
