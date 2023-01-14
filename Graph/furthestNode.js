/**
 * n개의 노드가 있는 그래프가 있습니다. 각 노드는 1부터 n까지 번호가 적혀있습니다. 1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.

노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.

제한사항

노드의 개수 n은 2 이상 20,000 이하입니다. 간선은 양방향이며 총 1개 이상 50,000개 이하의 간선이 있습니다. vertex 배열 각 행 [a, b]는 a번 노드와 b번 노드 사이에 간선이 있다는 의미입니다.

https://uic11.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B7%B8%EB%9E%98%ED%94%84-%EA%B0%80%EC%9E%A5-%EB%A8%BC-%EB%85%B8%EB%93%9C-%EB%AC%B8%EC%A0%9C-%ED%92%80%EC%9D%B4-featJS

 * @param {Number} n 노드 갯수
 * @param {Array} vertex 간선에 대한 정보가 담긴 2차원 배열
 * @returns
 */
function furthestNode(n, vertex) {
  let maxDistance = 0;
  let count = 0;
  const vertexMap = new Map();

  vertex.map((item, i) => {
    vertexMap.set(
      item[0],
      vertexMap.get(item[0]) ? [...vertexMap.get(item[0]), item[1]] : [item[1]]
    );
    vertexMap.set(
      item[1],
      vertexMap.get(item[1]) ? [...vertexMap.get(item[1]), item[0]] : [item[0]]
    );
    console.log('...vertexMap',...vertexMap);
    console.log('vertexMap',vertexMap);
  });
}

console.log(
  furthestNode(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
); // 3

// const newMap = new Map();
// newMap.set(0,[1,2,3,4,5])
// newMap.set(5,[1,2,3,4,5,6])

// console.log('newMap',newMap.values())

