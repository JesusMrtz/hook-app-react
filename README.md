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


## useReducer
El useReducer es un Hook que nos permite manipular el state de nuestros componentes funcionales, esto se logra a través de:
* Una función reducer
* Y un función de retorno llamada dispatch con la cual podemos combinar o emparejar el state.
UseReducer esta basado en la librería Redux, es por ello que, aparecen las palabras, reducer y dispatch.

### ¿Cuándo usar el useReducer?
Bien, esto no será una respuesta como tal, ya que, depende del tipo de proyecto, pero, se pueden tomar como recomendaciones para tomar una decisión:

* Cuando el estado siguiente del "state" depende del estado anterior.
* Cuando manejas un objeto JSON como state y tienes subvalores dentro de tu mismo objeto.
* Cuando la lógica es muy compleja.
 
### ¿Cómo es es un useReducer?
* Debe ser una función (La tarea que realice, deber hacerce de manera interna)
* Usualmente recibe dos argumentos
* Debe ser una función pura
  * No debe tener efectos secundarios
  * No debe realizar tareas asincronas
  * Debe de retornar siempre un estado nuevo
  * No debe llamar al localStorage o sessionStorage
  * No debe requerir mas que una acción


## UseContext
Ayuda a compartir información en un estado global de la aplicación.

También ayuda evitar que el envio de props sea un caos cuando necesitemos enviarle información extra del padre a un desendiente lejano del árbol y viceversa. Pero también puede enviar información a aquellos componentes que no tengan relación entre sí siempre y cuando el "Context" los envuelva