<template>
    <div>
       <table>
            <h2>Documentation of the 18-year Losing Streak</h2>
            <tr>
                <th>Year</th>
                <th>Percent</th>
                <th>Rank</th>
            </tr>
            <tr v-for="standing in $store.state.standings" v-bind:key="standing.year">
                <th>{{standing.year}}</th>
                <th>{{standing.percent}}</th>
                <th>{{standing.rank}}</th>
            </tr>  
        </table>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>

table {
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

tr {
    display: flex;
    justify-content: space-evenly;
}

</style>