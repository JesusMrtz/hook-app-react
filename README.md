# Hooks en ReactJs

## UseState
En el useState también puede tener propiedades compuestas y no solo primitivas.


## UseEffect
Sirve para disparar efectos secundarios y recibe una función como argumento

### Condiciones del useEffect
* No se recomienda que el useEffect no tenga el segundo parámetro aunque sea opcional
  ```
  /** **Este código no es recomendable** **/
   useEffect(() => {
        console.log('Llamando al useEffect!!!');
    });
  ```

* Si se le pone ( **[]** ) como segundo parámetro, esto significa que el hook se propagará una única vez cuando el componente sea montado por primera vez. *Es como si fuera un onInit en angular*
  ```
  /** Este código se ejecutará cuando el componente sea montado por primera vez **/
   useEffect(() => {
        console.log('Llamando al useEffect!!!');
    }, []);
  ```

* Podemos tener más de un formState por separado y es recomendable hacerlo asi por el equipo de React.
  ```
  /** Este código se ejecutará cuando la variable formState cambie **/
   useEffect(() => {
        console.log('Llamando al useEffect!!!');
    }, [ formState ]);
  ```

* Podemos ejecutar código cuando el componente se desmonta en el **return** del hook. *Es como si fuera el onDestroy en angular*
    ```
     /** Código que se ejecutará cuando un componente se monta y desmonta por primera vez **/
    useEffect(() => {
        console.log('MesssageComponent mounted!!');

        return () => {
            console.log('MessageComponent unmonted!!!');
        }
    }, []);
  ```


### Precauciones del useEffect

## useRef
Sirve para manejar un valor de una variable que se puede cambiar pero no dispara renderizaciones. **Es como tener un @ViewChild con un ElementRef.**

Un uso principal es que nos permite tener una referencia controlable de un elemento HTML y que cuando cambié ese elemento, no dispare una renderización.

## useLayoutEffect
Es idéntico al *useEffect*, pero se dispara de forma síncrona después de tolas las mutaciones del DOM se hayan disparado.

Después de que todos los elementos y textos HTML se hayan cargado. Se dispara el **useLayoutEffect**, pero se recomienda utilizar el *useEffect* hasta donde sea posible.

## Memo
Es un componente de orden superior que podemos usar para envolver componentes que no queremos volver a renderizar a menos que cambien sus properties. *Esto no funciona con la properties que se guarden en una dirección de memoria distinta como las funciones*.


El *Memo* solo se debe utilizar en cierta situaciones especificas porque cachea el componente y este realiza un proceso de comparación que puede ser más costoso que dejar de renderizar el componente memorizado.

La recomendación para utilizar el *Memo* es no usarlo o usuarlo solamente **cuando notes que tu aplicación se está quedando lenta** o cuando los componentes **hacen llamadas a las APIS**


## useMemo
Es un React Hook que podemos usar para envolver funciones dentro de un componente. Podemos usar esto para asegurarnos de que los valores dentro de esa función se vuelvan a calcular solo cuando una de sus dependencias cambie

Se puede utilizar como si fueran **propiedades computadas** como en VueJs porque almacena el retorno de una función.

La diferencia entre el useEffect es que el useEffect se usa para realizar acciones en el ciclo de vida del componente y useMemo para memorizar un valor que implique realizar acciones pesadas sin que se vuelva a ejecutar o calcular en caso de re-render


## useCallback
Nos permite guardar definiciones de funciones para evitar re-renderizados cuando estamos utilizando el useMemo

Su principal trabajo es que sirve para memorizar funciones porque las funciones apunta a diferente tipo de memoria.

Y si esa función memorizada cambia, se volverá a renderizar.