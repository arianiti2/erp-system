import { computed, inject } from '@angular/core';
import { signalStore, withState, withMethods, withComputed, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
// import { ShipmentService } from './shipment.service';


export interface ShipmentState {
  items: any[];
  isLoading: boolean;
  filter: 'All' | 'Pending' | 'Delivered';
}

const initialState: ShipmentState = {
  items: [],
  isLoading: false,
  filter: 'All',
};

export const ShipmentStore = signalStore(
  { providedIn: 'root' }, 
  withState(initialState),
  
  // 2. Computed Properties (Derived State/Selectors)
  withComputed(({ items, filter }) => ({
    filteredShipments: computed(() => {
      const currentFilter = filter();
      if (currentFilter === 'All') return items();
      return items().filter(s => s.status === currentFilter);
    }),
    shipmentCount: computed(() => items().length)
  })),

  // 3. Methods (Actions & Side Effects)
//   withMethods((store, shipmentService = inject(ShipmentService)) => ({
 
//     updateFilter(filter: 'All' | 'Pending' | 'Delivered') {
//       patchState(store, { filter });
//     },

 
//     // loadShipments: rxMethod<void>(
//     //   pipe(
//     //     tap(() => patchState(store, { isLoading: true })),
//     //     switchMap(() => shipmentService.getAll().pipe(
//     //       tap((items) => patchState(store, { items, isLoading: false }))
//     //     ))
//     //   )
//     // ),

 
//     addShipment(shipment: any) {
//       patchState(store, (state) => ({ 
//         items: [...state.items, shipment] 
//       }));
//     }
//   }))
);