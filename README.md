# 타입스크립트 환경에서 express 및 sequelize 사용

현 브랜치에서는 express를 타입스크립트 환경에서 사용하되, mysql 및 sequelize를 데이터베이스로 사용하고 있다.
Sequelize 라이브러리의 경우 상당히 런타입 환경에 의존하는 방식으로 코드가 작성되어 있어, 타입스크립트 환경에서 이용하기 위해서는 런타임 환경에서 생성되는 각종 함수나 프로퍼티들을 declare을 통해 선언해야 한다.
예를 들어, Sequelize에서 object 간의 관계는 hasOne, hasMany, belongsTo, belongsToMany 와 같은 함수에 의해 설정된다.
one-to-one 관계는 foo.hasOne(bar); bar.belongsTo(foo) 을 통해 지정할 수 있는데, 이에 의해 foo.getBar / foo.setBar / foo.createBar 같은 함수들이 런타임 환경에서 생성된다.
이러한 기능은 타입스크립트의 정적 타입 검사에 위배되기 때문에, 이를 이용하기 위해서는 declare을 통해 모든 함수를 미리 선언해둬야 한다.
