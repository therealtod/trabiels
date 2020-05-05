<template>
  <q-page class='flex flex-center'>
    <div class='content'>
      <div class='leftContent'>
        <div class='box1Left'>
          <div class='col' v-for='(column) in columns' :key='column.index'>
            {{column.index}}
          </div>
        </div>
        <div class='box2Left'>Box2</div>
        <div class='box3Left'>Box3</div>
      </div>
      <div class='rightContent'>
        <div class='box1Right'>Box1</div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'GameRoom',
  data() {
    return {
      columns: [
        {
          column: 'ciao1',
          index: 1,
        },
        {
          column: 'ciao2',
          index: 2,
        },
        {
          column: 'ciao3',
          index: 3,
        },
        {
          column: 'ciao4',
          index: 4,
        },
        {
          column: 'ciao5',
          index: 5,
        },
        {
          column: 'ciao6',
          index: 6,
        },
      ],
    };
  },
};
</script>
