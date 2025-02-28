/** ******************************************************************************************************************************
 * interface used to define the vector types.
 */
export type TypeOfVector = 'polyline' | 'polygon' | 'circle' | 'marker';

/** ******************************************************************************************************************************
 * interface used to define the vector type keys.
 */
export type TypeVectorKeys = 'POLYLINE' | 'POLYGON' | 'CIRCLE' | 'MARKER';

/** ******************************************************************************************************************************
 * constant used to specify available vectors to draw.
 */
export const CONST_VECTOR_TYPES: Record<TypeVectorKeys, TypeOfVector> = {
  POLYLINE: 'polyline',
  POLYGON: 'polygon' as TypeOfVector,
  CIRCLE: 'circle' as TypeOfVector,
  MARKER: 'marker' as TypeOfVector,
};

/** ******************************************************************************************************************************
 * Line,Polygon,Marker styles.
 */
export type TypeFeatureStyle = {
  strokeColor?: string;
  strokeWidth?: number;
  strokeOpacity?: number;
  fillColor?: string;
  fillOpacity?: number;
};

/** ******************************************************************************************************************************
 * Marker icon styles.
 */
export type TypeIconStyle = {
  anchor?: number[];
  size?: number[];
  scale?: number;
  anchorXUnits?: string;
  anchorYUnits?: string;
  src: string;
};

/** ******************************************************************************************************************************
 * Circle and Circle marker styles.
 */
export interface TypeFeatureCircleStyle extends TypeFeatureStyle {
  radius?: number;
}
